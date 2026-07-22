# 08. Deployment Guide

## Deployment profiles

### Static demonstration
Use GitHub Pages for HTML, CSS, JavaScript, and static sample assets only.

### Production web
Deploy the frontend behind HTTPS and configure it to call the production API URL.

### Production API
Run Node.js under a managed service, container runtime, or process manager. Configure health checks, logs, secrets, and automatic restart.

### Production database
Use PostgreSQL with PostGIS. Apply migrations through a controlled deployment process.

### Desktop
Build and sign the Electron installer. Publish approved binaries through GitHub Releases or an organizational distribution channel.

## GitHub Pages workflow

The included workflow publishes the repository's static root. Node.js, Electron, SQLite server functions, and private APIs will not run on GitHub Pages.

## Production checklist

- Domain and valid TLS certificate
- Environment-managed secrets
- Restricted database network access
- Daily backup and tested restoration
- Logging and monitoring
- CORS allowlist
- Rate limiting
- Dependency scanning
- Data retention and incident response
- Staging environment before production
