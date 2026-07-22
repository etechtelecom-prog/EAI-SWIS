const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("eaiDesktop", {
  platform: process.platform,
  version: "1.0.0"
});
