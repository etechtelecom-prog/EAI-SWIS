# EAI Smart Waste Intelligence System (EAI-SWIS)

Enterprise starter platform for Nakhon Ratchasima Provincial Administrative Organization.

## Technology
- Frontend: HTML5 + CSS3 + JavaScript ES Modules
- Desktop: Electron
- Map: Leaflet
- Offline database target: SQLite
- Server database: PostgreSQL + PostGIS
- Backend API: Node.js + Express
- Decision Engine: Waste Decision Intelligence API
- Responsive: Desktop, Notebook, Tablet, Mobile

## Run as web
Open `index.html` in Chrome/Edge or run:

```bash
npm install
npm run web
```

## Run as Electron desktop
```bash
npm install
npm run desktop
```

## Run backend API
```bash
npm install
npm run server
```

API health:
`http://localhost:3000/api/v1/health`

## Important
This is the enterprise starter UI and architecture. Dashboard data is demonstration data. PostgreSQL/PostGIS, SQLite sync, authentication, and production decision logic will be connected in subsequent modules.
