# Femboy Detector

100% random. 0% accurate. Click to detect.

---

## How to build the .exe (Windows)

1. **Install Node.js**  
   Download and install from [nodejs.org](https://nodejs.org) if you don’t have it.

2. **Open a terminal** in this project folder (e.g. PowerShell or Command Prompt).

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Build the app:**
   ```bash
   npm run build
   ```

5. **Get the installer**  
   Open the **`dist`** folder. You should see **Femboy Detector Setup 1.0.0.exe** (or a similar version number). That’s the installer.

6. **Install the app**  
   Run the Setup exe. Choose install location if you want, then finish. Open “Femboy Detector” from the Start Menu or desktop shortcut.

**Help / contact:** In the app, use **Help → Contact / GitHub** in the menu bar, or click **Help / Contact: GitHub** at the bottom to open this repo (issues, contact, etc.).

If no installer appears in `dist` after building, run `npm install` again (this installs **electron-builder**), then run `npm run build` again.

---

## Run without building (dev)

```bash
npm install
npm start
```

Opens the app in a window without creating an .exe.

---

## Run in browser

Open `index.html` in any browser (no Node/Electron needed).
