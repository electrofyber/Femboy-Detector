const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('openExternal', (url) => ipcRenderer.invoke('open-external', url));
contextBridge.exposeInMainWorld('openCredits', () => ipcRenderer.invoke('open-credits'));
