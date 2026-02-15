const { contextBridge, shell, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('openExternal', (url) => shell.openExternal(url));
contextBridge.exposeInMainWorld('openCredits', () => ipcRenderer.invoke('open-credits'));
