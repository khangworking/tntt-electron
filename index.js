const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 500,
    frame: false,
    titleBarStyle: "hidden",
    resizable: false,
  });
  win.maximize();
  win.loadFile("./dist/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
