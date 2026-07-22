(() => {
  "use strict";

  const menuButton = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");
  menuButton?.addEventListener("click", () => sidebar.classList.toggle("open"));

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((x) => x.classList.remove("active"));
      item.classList.add("active");
      if (window.innerWidth < 980) sidebar.classList.remove("open");
    });
  });

  const animateCounter = (element) => {
    const target = Number(element.dataset.count || 0);
    const duration = 1100;
    const started = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  document.querySelectorAll("[data-count]").forEach(animateCounter);

  const syncText = document.getElementById("syncText");
  let syncSeconds = 12;
  setInterval(() => {
    syncSeconds += 1;
    syncText.textContent = `${syncSeconds} sec ago`;
    if (syncSeconds > 40) {
      syncSeconds = 0;
      syncText.textContent = "Just now";
    }
  }, 1000);

  if (!window.L) {
    console.error("Leaflet failed to load.");
    return;
  }

  const center = [14.9799, 102.0977];
  const map = L.map("map", { zoomControl: false }).setView(center, 8);
  L.control.zoom({ position: "bottomright" }).addTo(map);

  const road = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  });

  const satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles &copy; Esri" }
  );

  const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: "Map data &copy; OpenStreetMap contributors, SRTM"
  });

  const labels = L.tileLayer(
    "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Labels &copy; Esri" }
  );

  const hybrid = L.layerGroup([satellite, labels]);
  road.addTo(map);

  const points = [
    [14.9799,102.0977,"critical","Cluster 12","Overflow probability 87%"],
    [15.229,101.991,"watch","Cluster 08","Capacity 79%"],
    [14.704,102.188,"normal","Cluster 21","Operating normally"],
    [15.067,102.395,"watch","Cluster 15","Delayed route"],
    [14.523,102.104,"normal","Cluster 27","SLA on target"],
    [15.421,102.287,"critical","Cluster 03","Vehicle shortage"],
    [14.843,101.742,"normal","Cluster 33","Collection completed"]
  ];

  const colors = { normal:"#1eb574", watch:"#e7a126", critical:"#df4545" };
  const wasteLayer = L.layerGroup();
  const clusterLayer = L.layerGroup();
  const heatLayer = L.layerGroup();

  points.forEach(([lat,lng,status,name,desc], index) => {
    const marker = L.circleMarker([lat,lng], {
      radius: status === "critical" ? 10 : 8,
      color:"#fff", weight:3, fillColor:colors[status], fillOpacity:.95
    }).bindPopup(`<b>${name}</b><br>${desc}<br><small>EAI Platform demo data</small>`);
    marker.addTo(wasteLayer);

    L.circle([lat,lng], {
      radius: status === "critical" ? 28000 : 17000,
      stroke:false, fillColor:colors[status], fillOpacity:.10
    }).addTo(heatLayer);

    const cluster = L.circleMarker([lat + .03, lng + .03], {
      radius: 14, color:"#0a5d3d", weight:2, fillColor:"#fff", fillOpacity:.9
    }).bindTooltip(String(index + 1), { permanent:true, direction:"center", className:"cluster-label" });
    cluster.addTo(clusterLayer);
  });
  wasteLayer.addTo(map);

  const gpsLayer = L.layerGroup();
  const gpsRoute = [
    [14.71,101.86],[14.78,101.94],[14.86,102.02],[14.94,102.09],[15.02,102.18]
  ];
  L.polyline(gpsRoute,{color:"#247fdb",weight:4,dashArray:"8 8"}).addTo(gpsLayer);
  gpsRoute.forEach((p,i) => L.circleMarker(p,{radius:5,color:"#fff",weight:2,fillColor:"#247fdb",fillOpacity:1})
    .bindPopup(`Vehicle KRT-${String(i+6).padStart(2,"0")}<br>GPS signal active`).addTo(gpsLayer));

  const boundaryLayer = L.layerGroup();
  L.polygon([
    [15.75,101.20],[15.80,102.75],[14.95,103.20],[14.10,102.72],[14.15,101.52]
  ],{color:"#7b55c7",weight:2,fillColor:"#7b55c7",fillOpacity:.04,dashArray:"7 6"})
    .bindTooltip("Operational Boundary").addTo(boundaryLayer);

  const droneLayer = L.layerGroup();
  [[15.03,102.22],[14.83,101.89]].forEach((p,i)=>{
    L.marker(p,{icon:L.divIcon({className:"drone-marker",html:"◈",iconSize:[30,30],iconAnchor:[15,15]})})
      .bindPopup(`Drone Mission D-${i+1}<br>Survey in progress`).addTo(droneLayer);
  });

  const baseMaps = {
    "Road": road,
    "Satellite": satellite,
    "Terrain": terrain,
    "Hybrid": hybrid
  };
  const overlays = {
    "Waste": wasteLayer,
    "Heatmap": heatLayer,
    "Cluster": clusterLayer,
    "GPS": gpsLayer,
    "Boundary": boundaryLayer,
    "Drone": droneLayer
  };
  L.control.layers(baseMaps, overlays, { collapsed:false, position:"topright" }).addTo(map);
  L.control.scale({ imperial:false }).addTo(map);

  document.getElementById("fitMap")?.addEventListener("click", () => {
    map.fitBounds(L.featureGroup([...wasteLayer.getLayers(), ...gpsLayer.getLayers()]).getBounds().pad(.15));
  });
  document.getElementById("refreshMap")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.textContent = "↻ Syncing...";
    setTimeout(() => {
      button.textContent = "✓ Updated";
      setTimeout(() => button.textContent = "↻ Refresh", 1000);
    }, 700);
  });

  setTimeout(() => map.invalidateSize(), 250);
})();