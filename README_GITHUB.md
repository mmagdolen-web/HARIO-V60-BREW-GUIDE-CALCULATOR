# ☕ Coffee Brew Calculator

An interactive, real-time brewing guide with live timer and dynamic recipes for filter coffee enthusiasts.

**Live Demo**: https://YOUR_USERNAME.github.io/brew-calculator

![Coffee Brew Calculator](https://img.shields.io/badge/status-active-brightgreen) ![License MIT](https://img.shields.io/badge/license-MIT-blue)

## Features 🚀

✅ **Live Timer** — Step-by-step guidance during brewing  
✅ **Dynamic Recipes** — Updates instantly based on water amount & ratio  
✅ **Multi-Method Support** — V60, Chemex, Aeropress, Kalita Wave, Pour Over  
✅ **Mobile Optimized** — Add to iPhone home screen as a web app  
✅ **Offline Capable** — Works without internet after first load  
✅ **Zero Dependencies** — Pure HTML, CSS, JavaScript (Vite optional)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/brew-calculator.git
cd brew-calculator
```

### 2. Open Locally (No Build Required)
Simply open `index.html` in your browser:
```bash
open index.html  # macOS
start index.html  # Windows
```

Or use a local server (Python):
```bash
python -m http.server 3000
# Then visit http://localhost:3000
```

### 3. (Optional) Build with Vite
```bash
npm install
npm run dev      # Development server
npm run build    # Production build
```

## Usage

### On Desktop
1. Select brewing method (V60, Chemex, etc.)
2. Choose water amount or preset (Small Cup, Large Cup, etc.)
3. Select coffee-to-water ratio
4. Review calculated recipe
5. Click **"Start Brewing"** to begin timer
6. Timer highlights each step automatically

### On iPhone
1. Open in Safari: `https://YOUR_USERNAME.github.io/brew-calculator`
2. Tap **Share** → **Add to Home Screen**
3. Tap **Add**
4. Launch from home screen like a native app

## Recipe Customization

| Method | Grind | Temp | Brew Time | Bloom |
|--------|-------|------|-----------|-------|
| V60 | Medium-fine | 95-98°C | 3-4 min | 2× coffee |
| Chemex | Medium-coarse | 95-98°C | 4-4.5 min | 2.5× coffee |
| Aeropress | Medium-fine | 90-95°C | 2-3 min | 1.5× coffee |
| Kalita Wave | Medium | 95-98°C | 3.5-4 min | 2× coffee |
| Pour Over | Medium | 95-98°C | 3-4 min | 2× coffee |

### Coffee-to-Water Ratios

| Ratio | Name |
|-------|------|
| 1:15 | Strong |
| 1:16 | Standard (Default) |
| 1:16.67 | James Hoffmann |
| 1:17 | Light |
| 1:18 | Nordic |

## Project Structure

```
brew-calculator/
├── index.html                 # Main app (HTML + CSS + JS inline)
├── src/
│   └── lib/
│       └── brewingLogic.js   # Core calculation engine
├── package.json              # NPM dependencies
├── vite.config.js            # Build configuration
├── .gitignore                # Git ignore rules
├── README.md                 # This file
├── DEPLOYMENT_GUIDE.md       # Step-by-step GitHub Pages setup
└── BREWING_GUIDES.md         # Detailed brewing instructions
```

## How It Works

### Calculations
- **Coffee Amount** = Water (ml) ÷ Ratio
  - Example: 300ml ÷ 16 = 18.75g
- **Bloom Water** = Coffee × Method-specific multiplier
  - V60 bloom: Coffee × 2
- **Pour Milestones** = Water × 50%, 75%, 100%

### Timer Steps
The timer automatically highlights each brewing step:
1. **Bloom** (0-45s) — Pour & saturate grounds
2. **First Pour** (45-90s) — Pour to 50% water
3. **Second Pour** (90-150s) — Pour to 75% water
4. **Final Pour** (150-210s) — Pour to 100% water
5. **Drawdown** (210-270s) — Let final water drain
6. **Done** — Enjoy your coffee!

## Customization

### Change App Name
Edit in `index.html` `<head>`:
```html
<meta name="apple-mobile-web-app-title" content="Brew Timer">
```

### Adjust Brew Timeline
Edit `BREW_TIMELINE` object in `index.html` `<script>`:
```javascript
const BREW_TIMELINE = {
  v60: [
    { name: 'Bloom', startTime: 0, duration: 45, ... },
    // ... more steps
  ]
}
```

### Change Base URL (for subdirectory deployment)
Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/brew-calculator/',  // Change this path
})
```

## Deployment

### GitHub Pages (Recommended)
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for step-by-step instructions.

Quick summary:
1. Create GitHub repo: `brew-calculator`
2. Upload files
3. Enable GitHub Pages in Settings
4. Your app lives at: `https://YOUR_USERNAME.github.io/brew-calculator`

### Other Platforms
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `index.html` + `src/` folder
- **Traditional Hosting**: Upload files via FTP or cPanel

## Browser Support

✅ Chrome 90+  
✅ Safari 14+ (iOS 14+)  
✅ Firefox 88+  
✅ Edge 90+

## Performance

- **Bundle Size**: ~30KB (unminified)
- **Load Time**: <1s (local), <2s (GitHub Pages)
- **Mobile**: Optimized for iOS (A11-A17 chips tested)

## Roadmap 🗺️

- [ ] Brew notes/history (localStorage)
- [ ] Dark mode for evening brewing
- [ ] Temperature reminders (push notifications)
- [ ] Multiple saved recipes
- [ ] Export recipes as PDF
- [ ] Brewing statistics dashboard
- [ ] Multi-language support

## Contributing

Found a bug? Have a feature request?
1. Click **Issues** in this repo
2. Click **New issue**
3. Describe the bug/feature clearly
4. Submit!

## License

MIT License — Use this freely in your own projects!

See [LICENSE](./LICENSE) for details.

## Credits

Inspired by [Amokka V60 Brew Guide](https://amokka.com/en/pages/brew-guide-v60)

Built with ❤️ for coffee enthusiasts.

## Questions?

- 📖 See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for setup help
- 🍳 See [BREWING_GUIDES.md](./BREWING_GUIDES.md) for detailed brewing instructions
- 🐛 Open an Issue for bugs or feature requests

---

**Happy brewing!** ☕✨

Last updated: July 23, 2026
