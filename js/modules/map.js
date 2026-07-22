import { showToast } from "./toast.js";

let map;
let layers = {};
let uploadedLayer;

const clusterPoints = [
  [14.9799,102.0978,12,"critical"], [15.18,102.22,7,"watch"],
  [14.82,102.37,20,"normal"], [15.34,102.48,3,"normal"],
  [14.64,101.87,18,"watch"], [15.11,101.74,26,"normal"],
  [14.90,102.70,31,"watch"], [15.55,102.13,8,"normal"],
  [14.48,102.18,22,"critical"]
];

export function initMap(){
  const mapNode = document.getElementById("map");
  if(!window.L){
    mapNode.innerHTML = "<div style='height:100%;display:grid;place-items:center;text-align:center;padding:30px'>ไม่สามารถโหลดไลบรารีแผนที่ได้<br><small>Map library unavailable</small></div>";
    return;
  }

  map = L.map("map", { zoomControl:false }).setView([14.9799,102.0978], 8);
  L.control.zoom({position:"bottomright"}).addTo(map);

  const street = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom:19, attribution:"&copy; OpenStreetMap contributors"
  }).addTo(map);

  const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom:19, attribution:"Tiles &copy; Esri"
  });

  L.control.layers({"แผนที่ถนน • Street":street,"ภาพดาวเทียม • Satellite":satellite}, {}, {position:"topright"}).addTo(map);

  layers.clusters = L.layerGroup();
  clusterPoints.forEach(([lat,lng,id,status]) => {
    const color = status === "critical" ? "#dc2626" : status === "watch" ? "#f59e0b" : "#2f855a";
    L.circleMarker([lat,lng], {radius:10,color:"#fff",weight:3,fillColor:color,fillOpacity:.95})
      .bindPopup(`<b>คลัสเตอร์ ${id}</b><br>Cluster ${id}<br>สถานะ: ${status}`)
      .addTo(layers.clusters);
  });
  layers.clusters.addTo(map);

  layers.fleet = L.layerGroup();
  [[14.99,102.14,"KRT-01"],[15.06,102.02,"KRT-02"],[14.88,102.22,"KRT-03"],[15.25,102.34,"KRT-04"]]
    .forEach(([lat,lng,id]) => L.marker([lat,lng]).bindPopup(`<b>${id}</b><br>กำลังปฏิบัติงาน<br>Active collection vehicle`).addTo(layers.fleet));

  layers.hotspots = L.layerGroup();
  [[14.96,102.08,230],[15.02,102.15,170],[14.90,102.23,120]]
    .forEach(([lat,lng,size]) => L.circle([lat,lng], {radius:size*9,color:"#dc2626",weight:1,fillColor:"#f59e0b",fillOpacity:.25}).addTo(layers.hotspots));

  document.getElementById("mapLayer").addEventListener("change", (event) => {
    Object.values(layers).forEach((layer) => map.removeLayer(layer));
    layers[event.target.value]?.addTo(map);
  });

  document.getElementById("geojsonInput").addEventListener("change", handleGeoJSON);
  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener("resize", () => setTimeout(() => map.invalidateSize(), 120));
}

function handleGeoJSON(event){
  const file = event.target.files?.[0];
  if(!file || !map) return;

  const reader = new FileReader();
  reader.onload = () => {
    try{
      const geojson = JSON.parse(reader.result);
      if(uploadedLayer) map.removeLayer(uploadedLayer);
      uploadedLayer = L.geoJSON(geojson, {
        style:{color:"#d97706",weight:1.5,fillColor:"#14532d",fillOpacity:.08},
        onEachFeature:(feature,layer) => {
          const props = feature.properties || {};
          const name = props.T_NAME_T || props.AMP_NAME_T || props.PROV_NAMT || props.name || "พื้นที่";
          layer.bindPopup(`<b>${name}</b><br>Uploaded boundary`);
        }
      }).addTo(map);
      map.fitBounds(uploadedLayer.getBounds(), {padding:[24,24]});
      showToast(`โหลด ${file.name} สำเร็จ`);
    }catch(error){
      console.error(error);
      showToast("ไม่สามารถอ่านไฟล์ GeoJSON ได้");
    }
  };
  reader.readAsText(file);
}
