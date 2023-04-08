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
  groupFeast: () => ipcRenderer.invoke("people:groupFeast"),
  students: (params) => ipcRenderer.invoke("people:students", params),
  student: (id) => ipcRenderer.invoke("people:student", id),
  deactivateStudent: (id) => ipcRenderer.invoke("people:deactivate", id),
  createStudent: (params) => ipcRenderer.invoke("people:create", params),
  studentLevels: () => ipcRenderer.invoke("level:students"),
  levelsForSelector: () => ipcRenderer.invoke("level:forSelector"),
  personRolesSearching: (term) =>
    ipcRenderer.invoke("person_roles:search", term),
});
