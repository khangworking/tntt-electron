const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const LevelController = require("./controllers/levels");
const Person = require("./models/person");
const sqlite3 = require("sqlite3").verbose();

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
  win.loadFile("./dist/index.html");
};

app.whenReady().then(() => {
  new sqlite3.Database("./tntt.db", (err) => {
    if (err) console.log(err);
    else createWindow();
  });

  ipcMain.handle("levels:all", LevelController.index);
  ipcMain.handle("levels:find", LevelController.show);
  ipcMain.handle("people:teachers", () => Person.teachers());

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
