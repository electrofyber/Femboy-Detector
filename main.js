const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');

const GITHUB_URL = 'https://github.com/electrofyber/Femboy-Detector';

function openCreditsWindow() {
  const creditsWindow = new BrowserWindow({
    width: 440,
    height: 420,
    title: 'Credits — Femboy Detector™',
    parent: BrowserWindow.getFocusedWindow() || undefined,
    modal: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  creditsWindow.loadFile('credits.html');
  creditsWindow.setMenu(null);
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 480,
    height: 520,
    minWidth: 400,
    minHeight: 450,
    title: 'Femboy Detector™',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const menuTemplate = [
    {
      label: 'Help',
      submenu: [
        {
          label: 'Credits',
          click: () => openCreditsWindow(),
        },
        {
          label: 'Contact / GitHub',
          click: () => shell.openExternal(GITHUB_URL),
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  ipcMain.handle('open-credits', () => openCreditsWindow());

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
