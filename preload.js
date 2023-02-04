const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
});

contextBridge.exposeInMainWorld("database", {
  onDatabaseConnected: (cb) => ipcRenderer.on("db:connected", cb),
  connect: () => ipcRenderer.invoke("db:connect"),
  allLevels: () => ipcRenderer.invoke("levels:all"),
  findLevel: (id) => ipcRenderer.invoke("levels:find", id),
  teachers: () => ipcRenderer.invoke("people:teachers"),
});
