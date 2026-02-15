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

5. **Get your .exe**  
   After the build finishes, open the **`dist`** folder. You’ll find:
   - **Femboy Detector Setup x.x.x.exe** – installer (run it to install the app).
   - **Femboy Detector x.x.x.exe** – portable single .exe (no install, just run).

Use the portable .exe if you only want one file to run or share.

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
