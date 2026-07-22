# 04. Software Architecture Document

## Components

### Web client
Static and dynamic browser interface for dashboard and WebGIS.

### Electron client
Desktop packaging for controlled local workflows and future offline storage.

### API server
Node.js and Express services for health checks, authentication, reports, files, maps, synchronization, and administration.

### Domain services
Waste report lifecycle, assignment, prioritization, collection operations, spatial rules, and decision support.

### Persistence
SQLite for local/offline datasets and PostgreSQL/PostGIS for shared production data.

### File storage
Photographs and attachments should use controlled file or object storage. Databases should store references and metadata rather than large binary payloads where practical.

## Interface rules

- APIs are versioned under `/api/v1`.
- Errors use consistent status codes and structured JSON.
- Input schemas are validated server-side.
- Database access is isolated from route handlers.
- Sensitive configuration is provided through environment variables.

## Architecture decisions

- SQLite is not the production multi-user database.
- GitHub Pages is only a static demonstration host.
- Electron packages are distributed separately from the web deployment.
- Production authentication and authorization are mandatory.
