# ☕ Coffee Brew Calculator — Complete Deployment Guide

Deploy your calculator to the web and add it to your iPhone home screen in 5 steps.

---

## Step 1: Set Up GitHub Repository

### 1.1 Create a GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Click **Sign up** (top right)
- Follow the prompts to create your account
- Verify your email

### 1.2 Create a New Repository
- Click the **+** icon (top right) → **New repository**
- Repository name: `brew-calculator` (or similar)
- Description: "Interactive coffee brewing guide with live timer"
- Choose **Public** (so it's accessible)
- Check **Add a README file**
- Click **Create repository**

### 1.3 Upload Your Files
You have two options:

**Option A: Upload via GitHub Web Interface (Easiest)**
1. Click **Add file** → **Upload files**
2. Drag & drop (or select):
   - `index.html`
   - `src/` folder (with `lib/brewingLogic.js`)
   - `package.json`
   - `vite.config.js`
3. Click **Commit changes**

**Option B: Clone & Push via Terminal (Developers)**
```bash
git clone https://github.com/YOUR_USERNAME/brew-calculator.git
cd brew-calculator
# Copy all files here
git add .
git commit -m "Initial commit: coffee brew calculator with timer"
git push origin main
```

---

## Step 2: Enable GitHub Pages Deployment

### 2.1 Configure Repository Settings
1. In your GitHub repo, click **Settings** (top right)
2. Left sidebar → **Pages**
3. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select `main` → `/root`
   - Click **Save**

### 2.2 Wait for Deployment
- GitHub will build & deploy automatically
- You'll see a green checkmark when done (takes ~2 minutes)
- Your site URL appears: `https://YOUR_USERNAME.github.io/brew-calculator`

✅ **Your calculator is now live on the web!**

---

## Step 3: Test on Desktop Browser

### 3.1 Visit Your Live Site
1. Copy your GitHub Pages URL: `https://YOUR_USERNAME.github.io/brew-calculator`
2. Open it in any browser (Chrome, Safari, Firefox)
3. Test:
   - Change water amount → recipe updates ✓
   - Change brewing method → timer steps update ✓
   - Click "Start Brewing" → timer runs ✓
   - Pause/Reset buttons work ✓

### 3.2 Troubleshooting
**Blank page?**
- Check browser console (F12 → Console tab)
- Ensure `src/lib/brewingLogic.js` exists in repo
- Check for 404 errors in Network tab

**Styles not loading?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## Step 4: Add to iPhone Home Screen (Web App)

### 4.1 Open on iPhone Safari
1. On your iPhone, open **Safari**
2. Go to: `https://YOUR_USERNAME.github.io/brew-calculator`
3. Wait for the page to fully load

### 4.2 Add to Home Screen
1. Tap the **Share** button (bottom toolbar — arrow pointing out of box)
2. Scroll down and tap **Add to Home Screen**
3. Customize (optional):
   - **Name**: "Brew Timer" (or whatever you prefer)
   - Keep it short for better home screen fit
4. Tap **Add** (top right)

✅ **The app is now on your iPhone home screen!**

### 4.3 Launch Your App
- Look for the new icon on your home screen
- Tap it to open the calculator
- It works like a native app (full screen, no browser chrome)

---

## Step 5: Optional Enhancements

### 5.1 Make It Feel More Like a Native App
Add this to your `index.html` inside `<head>`:

```html
<!-- iPhone app meta tags -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Brew Timer">
<link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect fill='%233d3d3a' width='180' height='180'/><text x='90' y='100' font-size='80' fill='white' text-anchor='middle' dominant-baseline='middle'>☕</text></svg>">
<meta name="theme-color" content="#3d3d3a">
```

This adds:
- ✓ Splash screen on launch
- ✓ Custom app icon (coffee emoji)
- ✓ App name in status bar
- ✓ Full-screen mode (no Safari UI)

### 5.2 Add Custom Domain (Optional)
If you want a shorter, custom URL like `brew.yourname.com`:

1. Register a domain (GoDaddy, Namecheap, etc.)
2. In GitHub repo **Settings** → **Pages**
3. Under "Custom domain", enter your domain
4. Follow DNS setup instructions from your domain registrar
5. Enable **Enforce HTTPS** (recommended)

### 5.3 Share Your App
Send friends your live URL:
```
https://YOUR_USERNAME.github.io/brew-calculator
```

They can:
- Use it online
- Add it to their home screen
- Share with other coffee enthusiasts!

---

## Complete Checklist ✅

- [ ] Created GitHub account
- [ ] Created `brew-calculator` repository
- [ ] Uploaded all files (index.html, src/, package.json, vite.config.js)
- [ ] Enabled GitHub Pages in Settings
- [ ] Tested on desktop browser
- [ ] Visited live URL in Safari on iPhone
- [ ] Added to iPhone home screen
- [ ] Tested timer functionality on iPhone
- [ ] (Optional) Added meta tags for native app feel
- [ ] (Optional) Set up custom domain

---

## Deployed App Features 🚀

Your calculator now has:
- ✅ **Live timer** that guides you through every brewing step
- ✅ **Dynamic recipes** based on water amount & ratio
- ✅ **Multi-method support** (V60, Chemex, Aeropress, Kalita Wave, Pour Over)
- ✅ **Mobile optimized** (works perfect on iPhone)
- ✅ **Works offline** (basic functionality, no internet required after first load)
- ✅ **Accessible anywhere** (share your GitHub URL)

---

## Troubleshooting

### Issue: "Page not found" on GitHub Pages
**Solution**: 
- Ensure your repo is **Public**
- Check **Settings → Pages** → Source is set to `main` branch, `/root` directory
- Wait 2-3 minutes for deployment to complete

### Issue: iPhone home screen app is blank
**Solution**:
- Hard refresh: Pull down at top of screen, wait for refresh
- Delete the app and re-add it to home screen
- Check Safari in settings: Settings → Safari → check "Allow pages to close windows"

### Issue: Timer doesn't work on iPhone
**Solution**:
- Try refreshing the page
- Check iOS Safari console (Settings → Safari → Advanced → Web Inspector)
- Try in a different browser (Chrome, Firefox)

### Issue: Styles look weird on mobile
**Solution**:
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check viewport meta tag is in `<head>`
- Test in Safari's responsive design mode (right-click → Inspect → toggle device toolbar)

---

## Next Steps 🎯

Once deployed:
1. **Share your calculator** with coffee friends
2. **Gather feedback** on timer accuracy & UX
3. **Iterate**: Add features like:
   - Temperature recommendations
   - Brew notes/history storage
   - Multiple recipe saves
   - Dark mode for evening brewing
4. **Monetize** (optional): Add Patreon link, coffee affiliate links, ads

---

## Support

- **GitHub Issues**: Use your repo's Issues tab to track bugs/features
- **Live URL**: Share directly with users: `https://YOUR_USERNAME.github.io/brew-calculator`
- **Questions?** Check [GitHub Pages documentation](https://docs.github.com/en/pages)

Happy brewing! ☕✨
