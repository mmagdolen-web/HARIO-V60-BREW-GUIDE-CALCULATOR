# Files to Upload to GitHub Repository

Here's the complete list of files you need to upload to your GitHub repo. All files are ready in `/mnt/user-data/outputs/`

## Repository Structure

```
brew-calculator/
├── index.html                    # Main application (CRITICAL)
├── package.json                  # NPM dependencies
├── vite.config.js               # Build configuration (optional if not using Vite)
├── .gitignore                   # Git ignore file
├── LICENSE                      # MIT License
├── README.md                    # Main GitHub README
├── DEPLOYMENT_GUIDE.md          # Step-by-step deployment instructions
├── BREWING_GUIDES.md            # Detailed brewing instructions
└── src/
    └── lib/
        └── brewingLogic.js      # Core brewing calculations (CRITICAL)
```

## File Details

### Essential Files (Required) 🔴

1. **index.html** (29 KB)
   - Main application file with all HTML, CSS, and JavaScript inline
   - Contains the timer, recipe calculator, and UI
   - This is the only file needed to run the app locally

2. **src/lib/brewingLogic.js** (10 KB)
   - Core calculation engine for recipes
   - Imported by index.html
   - Contains brewing method definitions and calculation functions

### Configuration Files (Recommended) 🟡

3. **package.json** (1 KB)
   - NPM dependencies list
   - Build scripts for Vite
   - Metadata about the project

4. **vite.config.js** (0.5 KB)
   - Build configuration for Vite (optional)
   - Only needed if you want to use `npm run build`

5. **.gitignore** (1 KB)
   - Tells Git which files to ignore
   - Ignores node_modules/, dist/, .DS_Store, etc.

### Documentation Files (Recommended) 🟡

6. **README.md** (6 KB)
   - Project overview
   - Features, usage instructions, customization guide
   - Project structure and deployment options

7. **DEPLOYMENT_GUIDE.md** (7 KB)
   - Step-by-step GitHub Pages deployment
   - Instructions for adding app to iPhone home screen
   - Troubleshooting tips

8. **BREWING_GUIDES.md** (14 KB)
   - Detailed brewing instructions for each method
   - Equipment recommendations
   - Troubleshooting common brewing issues

9. **LICENSE** (1 KB)
   - MIT License file
   - Allows others to use your code freely

---

## Upload Methods

### Method 1: GitHub Web Interface (Easiest - No Command Line)

1. Go to github.com and create new repo: `brew-calculator`
2. Click **Add file** → **Upload files**
3. Select and drag/drop ALL files from `/mnt/user-data/outputs/`
   - Select: index.html, package.json, vite.config.js, .gitignore, LICENSE, README.md, DEPLOYMENT_GUIDE.md, BREWING_GUIDES.md
   - Select: src/ folder (entire folder)
4. Click **Commit changes**

**Note**: GitHub will create the folder structure automatically

### Method 2: Git Command Line (For Developers)

```bash
# 1. Clone your new repo
git clone https://github.com/YOUR_USERNAME/brew-calculator.git
cd brew-calculator

# 2. Copy all files from outputs folder here
cp -r /mnt/user-data/outputs/* .

# 3. Push to GitHub
git add .
git commit -m "Initial commit: Coffee brew calculator with timer"
git push origin main
```

### Method 3: GitHub Desktop App

1. Download [GitHub Desktop](https://desktop.github.com)
2. Create new repo: brew-calculator
3. Drag & drop files from `/mnt/user-data/outputs/` into repo folder
4. Commit changes
5. Push to GitHub

---

## File Checklist Before Upload ✅

Make sure you have these files ready:

- [ ] index.html (29 KB)
- [ ] src/lib/brewingLogic.js (10 KB)
- [ ] package.json (1 KB)
- [ ] vite.config.js (0.5 KB)
- [ ] .gitignore (1 KB)
- [ ] LICENSE (1 KB)
- [ ] README.md (6 KB)
- [ ] DEPLOYMENT_GUIDE.md (7 KB)
- [ ] BREWING_GUIDES.md (14 KB)

**Total Size**: ~70 KB

---

## What Each File Does

| File | Purpose | Required? |
|------|---------|-----------|
| index.html | Main app + UI | ✅ YES |
| src/lib/brewingLogic.js | Calculations | ✅ YES |
| package.json | NPM setup | ⚠️ Optional |
| vite.config.js | Build config | ⚠️ Optional |
| .gitignore | Git rules | ⚠️ Recommended |
| LICENSE | Legal | ⚠️ Recommended |
| README.md | Documentation | ⚠️ Recommended |
| DEPLOYMENT_GUIDE.md | Setup guide | ⚠️ Nice to have |
| BREWING_GUIDES.md | Brewing help | ⚠️ Nice to have |

---

## Quick Start Path

**Minimum files needed to deploy:**
1. index.html
2. src/lib/brewingLogic.js

**Recommended files (everything):**
- All 9 files listed above

---

## After Upload

Once all files are uploaded to GitHub:

1. Go to your repo **Settings** → **Pages**
2. Set source to: **Deploy from a branch** → **main branch** → **/root**
3. Wait 2-3 minutes for deployment
4. Your app will be live at: `https://YOUR_USERNAME.github.io/brew-calculator`

✅ Done! Your app is live!

---

## Need Help?

See **DEPLOYMENT_GUIDE.md** in outputs folder for detailed setup instructions.
