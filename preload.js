const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('openExternal', (url) => shell.openExternal(url));
