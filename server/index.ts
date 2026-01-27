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
