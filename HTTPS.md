# HTTPS Configuration

## Local Development with HTTPS

To enable HTTPS for local development:

1. Generate self-signed certificates:
   ```bash
   ./scripts/generate-certs.sh
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

The server will automatically use HTTPS if certificates are found in the `certs/` directory.

## Certificate Locations

- **Certificate**: `certs/cert.pem`
- **Private Key**: `certs/key.pem`

You can also provide custom certificate paths via environment variables:
```bash
export SSL_CERT_PATH=/path/to/cert.pem
export SSL_KEY_PATH=/path/to/key.pem
```

## Browser Security Warnings

Self-signed certificates will trigger browser security warnings. To bypass:

- **Chrome**: Click "Advanced" → "Proceed to localhost (unsafe)"
- **Firefox**: Click "Advanced" → "Accept the Risk and Continue"
- **Safari**: Click "Show Details" → "visit this website"

For production, use certificates from a trusted Certificate Authority (Let's Encrypt, etc.).

## Production Deployment

In production, the server will:
1. Use HTTPS if certificates are available
2. Redirect HTTP traffic to HTTPS
3. Include security headers (HSTS, X-Frame-Options, etc.)

Set `NODE_ENV=production` when deploying:
```bash
NODE_ENV=production pnpm start
```
