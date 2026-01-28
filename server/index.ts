import express from "express";
import { createServer as createHttpServer } from "node:http";
import { createServer as createHttpsServer } from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  // Parse JSON request bodies
  app.use(express.json());

  // Redirect HTTP to HTTPS in production
  if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
      if (req.headers["x-forwarded-proto"] !== "https" && !req.secure) {
        return res.redirect(`https://${req.headers.host}${req.url}`);
      }
      next();
    });
  }

  // Security headers for HTTPS
  app.use((_req, res, next) => {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
  });

  // API endpoint for MailerLite subscriber registration
  app.post("/api/register", async (req, res) => {
    try {
      const { email, firstName, lastName, company, message } = req.body;

      // Validate required fields
      if (!email || !firstName || !lastName || !company) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const apiKey = process.env.MAILERLITE_API_KEY;
      if (!apiKey) {
        console.error("MAILERLITE_API_KEY environment variable is not set");
        return res.status(500).json({ error: "Server configuration error" });
      }

      // Submit to MailerLite API
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: {
            name: firstName,
            last_name: lastName,
            company,
            ...(message && { notes: message }),
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("MailerLite API error:", errorData);
        return res.status(response.status).json({
          error: "Failed to register interest",
          details: errorData.message || "Unknown error",
        });
      }

      const data = await response.json();
      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  // Use HTTPS if certificates are available, otherwise HTTP
  let server;
  const certPath = process.env.SSL_CERT_PATH || path.resolve(__dirname, "..", "certs", "cert.pem");
  const keyPath = process.env.SSL_KEY_PATH || path.resolve(__dirname, "..", "certs", "key.pem");

  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    const options = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    };
    server = createHttpsServer(options, app);
    console.log(`HTTPS Server running on https://localhost:${port}/`);
  } else {
    server = createHttpServer(app);
    console.log(`HTTP Server running on http://localhost:${port}/`);
    console.log(`Note: To enable HTTPS, provide SSL certificates at:`);
    console.log(`  - ${certPath}`);
    console.log(`  - ${keyPath}`);
  }

  server.listen(port);
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
