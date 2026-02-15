const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

const GITHUB_URL = 'https://github.com/electrofyber/Femboy-Detector';

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
          label: 'Contact / GitHub',
          click: () => shell.openExternal(GITHUB_URL),
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

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
