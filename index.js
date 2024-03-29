const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const LevelController = require("./controllers/levels");
const PeopleController = require("./controllers/people");
const Level = require("./models/level");
const Person = require("./models/person");
const DashboardController = require("./controllers/dashboard");
const LevelManagerController = require("./controllers/level_manager");

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 500,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.maximize();
  win.loadFile("./dist/index.html");
};

app.whenReady().then(async () => {
  createWindow();

  ipcMain.handle("dashboard", DashboardController.show);
  ipcMain.handle("levels:all", LevelController.index);
  ipcMain.handle("levels:find", LevelController.show);
  ipcMain.handle("level:create", LevelController.create);
  ipcMain.handle("people:findAll", (_, filters = {}) =>
    Person.findAll(filters)
  );
  ipcMain.handle("people:teachers", () => Person.teachers());
  ipcMain.handle("people:groupFeast", () => Person.groupByFeast());
  ipcMain.handle("people:students", (_, filters = {}) =>
    Person.students(filters)
  );
  ipcMain.handle("people:student", (_, id) => Person.student(id));
  ipcMain.handle("people:deactivate", PeopleController.delete);
  ipcMain.handle("people:create", PeopleController.create);
  ipcMain.handle("people:update", PeopleController.update);
  ipcMain.handle("level:students", () => Level.students());
  ipcMain.handle("level:teachers", () => Level.teachers());
  ipcMain.handle("level:forSelector", () => Level.optionsForSelector());
  ipcMain.handle("person_roles:search", (_, term) => PersonRole.search(term));
  ipcMain.handle("managers:create", LevelManagerController.create);
  ipcMain.handle("managers:switch", LevelManagerController.switch);
  ipcMain.handle("managers:remove", LevelManagerController.remove);

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
