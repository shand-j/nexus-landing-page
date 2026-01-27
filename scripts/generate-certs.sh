#!/bin/bash

# Generate self-signed SSL certificates for local development

CERTS_DIR="$(dirname "$0")/../certs"

mkdir -p "$CERTS_DIR"

if [ -f "$CERTS_DIR/cert.pem" ] && [ -f "$CERTS_DIR/key.pem" ]; then
  echo "SSL certificates already exist at $CERTS_DIR"
  read -p "Do you want to regenerate them? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 0
  fi
fi

echo "Generating self-signed SSL certificates..."

openssl req -x509 -newkey rsa:4096 -nodes \
  -keyout "$CERTS_DIR/key.pem" \
  -out "$CERTS_DIR/cert.pem" \
  -days 365 \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

if [ $? -eq 0 ]; then
  echo "✓ SSL certificates generated successfully at:"
  echo "  - $CERTS_DIR/cert.pem"
  echo "  - $CERTS_DIR/key.pem"
  echo ""
  echo "Note: These are self-signed certificates for local development only."
  echo "Your browser will show a security warning. You can bypass it for localhost."
else
  echo "✗ Failed to generate SSL certificates"
  exit 1
fi
