# GitHub Upload Checklist 📋

Follow this step-by-step to upload your Coffee Brew Calculator to GitHub.

---

## Step 1: Create GitHub Repository ✅

1. Go to [github.com](https://github.com)
2. Click **+** icon (top right) → **New repository**
3. Fill in:
   - **Repository name**: `brew-calculator`
   - **Description**: "Interactive coffee brewing guide with live timer"
   - **Public**: ✅ Check this
   - **Add a README file**: ✅ Check this
4. Click **Create repository**

✅ **Done!** You now have an empty repo ready.

---

## Step 2: Prepare Files from `/mnt/user-data/outputs/` ✅

All these files are already prepared and ready to upload:

```
📁 outputs/
├── 📄 index.html                    ← MAIN APP FILE
├── 📁 src/
│   └── 📁 lib/
│       └── 📄 brewingLogic.js       ← CALCULATIONS FILE
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 .gitignore
├── 📄 LICENSE
├── 📄 README.md
├── 📄 README_GITHUB.md
├── 📄 DEPLOYMENT_GUIDE.md
├── 📄 BREWING_GUIDES.md
└── 📄 FILES_TO_UPLOAD.md
```

---

## Step 3: Upload Files to GitHub 🚀

### Option A: Web Browser (Easiest - Click & Drag) 🎯

**Step A1**: Open your repo
- Go to: `https://github.com/YOUR_USERNAME/brew-calculator`

**Step A2**: Upload files
- Click blue **Add file** button (top right) → **Upload files**

**Step A3**: Drag & drop or select files
- Drag ALL files from `/mnt/user-data/outputs/` to the upload area
- Or click **choose your files** and select manually

**Step A4**: File Structure
Make sure files look like this after upload:
```
brew-calculator/
├── index.html ✅
├── src/lib/brewingLogic.js ✅
├── package.json ✅
├── vite.config.js ✅
├── .gitignore ✅
├── LICENSE ✅
├── README.md ✅
└── [other docs]
```

**Step A5**: Commit
- Scroll down → click **Commit changes**

✅ **Files are now in GitHub!**

---

### Option B: Terminal (For Developers) 💻

```bash
# 1. Clone your repo
git clone https://github.com/YOUR_USERNAME/brew-calculator.git
cd brew-calculator

# 2. Remove default README that was created
rm README.md

# 3. Copy all prepared files
cp -r /mnt/user-data/outputs/* .

# 4. Add all files to git
git add .

# 5. Create initial commit
git commit -m "Initial commit: Coffee brew calculator with timer"

# 6. Push to GitHub
git push origin main
```

✅ **Files are now in GitHub!**

---

## Step 4: Enable GitHub Pages 🌐

1. Go to your repo: `https://github.com/YOUR_USERNAME/brew-calculator`
2. Click **Settings** (top right)
3. Left sidebar → Click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"
5. Click **Save**

⏳ **Wait 2-3 minutes** for GitHub to deploy...

You'll see a green checkmark when done! ✅

---

## Step 5: Test Your Live App 📱

1. Your app is now live at:
   ```
   https://YOUR_USERNAME.github.io/brew-calculator
   ```

2. Click that link and test:
   - ✅ Page loads
   - ✅ Recipe calculator works
   - ✅ Timer starts and stops
   - ✅ Steps highlight as timer runs
   - ✅ Mobile looks good (open DevTools → Device Toolbar)

3. **Share this URL** with friends! They can use your app from any browser.

---

## Step 6: Add to iPhone Home Screen 📱

On your iPhone:

1. Open **Safari**
2. Visit: `https://YOUR_USERNAME.github.io/brew-calculator`
3. Wait for page to load fully
4. Tap **Share** button (bottom toolbar ↗️)
5. Scroll down → Tap **Add to Home Screen**
6. Edit name (optional): "Brew Timer"
7. Tap **Add** (top right)

✅ **App is now on your home screen!**

Tap the icon to launch your coffee calculator like a native app.

---

## File-by-File Reference 📚

### Essential (Must Upload) 🔴

**index.html** (29 KB)
- Everything in one file: HTML, CSS, JavaScript
- The main application
- *Must be in root folder* ✅

**src/lib/brewingLogic.js** (10 KB)
- Brewing calculations engine
- Imported by index.html
- *Must be in src/lib/ folder* ✅

### Recommended (Should Upload) 🟡

**package.json** (1 KB)
- Project metadata
- NPM dependencies

**vite.config.js** (0.5 KB)
- Build configuration
- Only needed if building with Vite

**.gitignore** (1 KB)
- Tells Git what files to ignore
- Ignores node_modules/, dist/, .DS_Store

**LICENSE** (1 KB)
- MIT License
- Legal permission to use code

### Documentation (Nice to Have) 🟢

**README.md** (6 KB)
- GitHub repo description
- Features, usage, customization

**DEPLOYMENT_GUIDE.md** (7 KB)
- Step-by-step setup instructions
- Troubleshooting

**BREWING_GUIDES.md** (14 KB)
- Detailed brewing instructions
- Tips for each method

---

## Complete Upload Checklist ✅

### Pre-Upload
- [ ] Created GitHub account
- [ ] Created `brew-calculator` repository
- [ ] Located `/mnt/user-data/outputs/` folder with all files

### Upload
- [ ] Uploaded `index.html` to root
- [ ] Uploaded `src/lib/brewingLogic.js` (in correct folder)
- [ ] Uploaded `package.json`
- [ ] Uploaded `vite.config.js`
- [ ] Uploaded `.gitignore`
- [ ] Uploaded `LICENSE`
- [ ] Uploaded `README.md`
- [ ] Uploaded `DEPLOYMENT_GUIDE.md`
- [ ] Uploaded `BREWING_GUIDES.md`

### GitHub Pages
- [ ] Went to Settings → Pages
- [ ] Set Source to "main" branch / "/ (root)" folder
- [ ] Waited 2-3 minutes for deployment
- [ ] Got green checkmark ✅

### Testing
- [ ] Visited live URL in browser
- [ ] App loaded successfully
- [ ] Recipe calculator works
- [ ] Timer functions correctly
- [ ] Tested on mobile/iPhone
- [ ] Added app to iPhone home screen

### Share
- [ ] Copied live URL
- [ ] Shared with friends
- [ ] Coffee brewing success! ☕

---

## Live URLs Reference 🔗

After upload, your app will be accessible at:

```
https://YOUR_USERNAME.github.io/brew-calculator
```

**Example**:
- If username is `jsmith`
- URL is: `https://jsmith.github.io/brew-calculator`

This URL is what you:
- Share with friends
- Use on your iPhone
- Bookmark for future brewing

---

## Troubleshooting 🔧

### "Blank page" after uploading?
- Check browser console (F12 → Console)
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Verify file paths are correct
- Check `src/lib/brewingLogic.js` exists

### "Page not found"?
- Verify GitHub Pages is enabled (Settings → Pages)
- Check branch is set to "main"
- Check folder is set to "/ (root)"
- Wait a few minutes if you just enabled Pages

### "Files don't look right in GitHub"?
- Make sure folder structure is correct:
  ```
  ✅ index.html (in root)
  ✅ src/lib/brewingLogic.js (in src/lib/)
  ```
- Not: `src/brewingLogic.js` ❌
- Not: `lib/brewingLogic.js` ❌

### iPhone app won't launch?
- Hard refresh on iPhone (pull down at top)
- Delete app and re-add to home screen
- Try in a different browser

---

## What's Next? 🚀

Once your app is live and working:

1. **Share it** with coffee friends
2. **Collect feedback** on timer accuracy and UX
3. **Add features**:
   - Brew notes history
   - Dark mode
   - Multiple saved recipes
4. **Monitor usage** (GitHub has analytics)

---

## Support Resources 📖

- **DEPLOYMENT_GUIDE.md** — Detailed step-by-step setup
- **FILES_TO_UPLOAD.md** — Complete file listing
- **GitHub Pages Docs** — https://docs.github.com/en/pages
- **Issues** — Use repo Issues tab to track bugs/features

---

## You're All Set! 🎉

Your Coffee Brew Calculator is ready to deploy!

**Next Step**: Follow the upload steps above and enjoy your live brewing app! ☕✨

Questions? Check DEPLOYMENT_GUIDE.md for detailed help.
