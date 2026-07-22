# EAI Platform Phase 2 — Installation Package

This package replaces the current dashboard front end with the Phase 2 Enterprise Geospatial Intelligence Platform.

## Included

- `index.html` — complete Phase 2 dashboard
- `css/phase2.css` — enterprise visual system
- `js/phase2.js` — animation, status, map and layer control

## Map layers

- Road
- Satellite
- Terrain
- Hybrid
- Waste
- Heatmap
- Cluster
- GPS
- Boundary
- Drone

## Install in the local repository

1. Back up the current `index.html`.
2. Copy `index.html`, `css/phase2.css`, and `js/phase2.js` into `C:\EAI-SWIS`.
3. Commit and push.

```bat
cd /d C:\EAI-SWIS
copy index.html index-phase1-backup.html
git add .
git commit -m "feat: upgrade dashboard to EAI Platform Phase 2"
git push
```

GitHub Pages will normally update within 1–3 minutes.

## Important

The metrics, weather, air quality, AI prediction and operational events in this front-end package are demonstration values. Connect them to authenticated production APIs before operational use.
