const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const connectDB = (win) => {
  return new sqlite3.Database("./tntt.db", (err) => {
    if (err) console.log(err);
    else win.webContents.send("db:connected");
  });
};

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 500,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.maximize();
  win.loadFile("./dist/index.html").then(() => connectDB(win));
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
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
