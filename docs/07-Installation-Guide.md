# 07. Installation Guide

## Development installation

```bash
git clone https://github.com/etechtelecom-prog/EAI-SWIS.git
cd EAI-SWIS
npm install
```

Inspect available commands:

```bash
npm run
```

Run the scripts defined by the repository, normally:

```bash
npm run web
npm run desktop
npm run server
```

## Configuration

Create a local environment file only when supported by the server implementation. Never commit it.

Example variable names:

```text
NODE_ENV=development
PORT=3000
DATABASE_URL=...
FILE_STORAGE_PATH=...
JWT_SECRET=...
```

## Verification

- Open the web interface.
- Start the API and call `/api/v1/health`.
- Verify browser console has no blocking errors.
- Verify no absolute Windows path is embedded in web assets.
- Confirm local databases and credentials are ignored by Git.
