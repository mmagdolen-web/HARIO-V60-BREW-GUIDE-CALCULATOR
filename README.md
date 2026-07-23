# ☕ Coffee Brew Calculator

An interactive, open-source calculator for filter coffee brewing. Calculate the perfect recipe for your favorite brewing method with step-by-step guides and brewing parameters.

**Try it live:** [brew-calculator.dev](https://brew-calculator.dev) (deploy to GitHub Pages)

## Features

✨ **Multi-Method Support**
- Hario V60
- Chemex
- Aeropress
- Kalita Wave
- Generic Pour Over

🧮 **Smart Calculations**
- Coffee-to-water ratio presets (Standard, Strong, Light, Nordic, James Hoffmann)
- Custom ratio input (1:10 to 1:25)
- Real-time recipe updates
- Input validation with warnings

📖 **Detailed Brew Guides**
- Step-by-step instructions for each method
- Optimal temperature ranges
- Grind size recommendations
- Bloom times and pour timing
- Troubleshooting tips

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Clean, intuitive UI
- No external dependencies (vanilla JS + CSS)

## Quick Start

### For Users
1. Open `index.html` in your browser
2. Select your brewing method
3. Set your desired brew size
4. Choose a ratio or create a custom one
5. Follow the step-by-step guide!

### For Developers

```bash
# Clone the repo
git clone https://github.com/yourusername/brew-calculator.git
cd brew-calculator

# Install dependencies
npm install

# Start development server (if using Vite)
npm run dev

# Build for production
npm run build
```

## Project Structure

```
brew-calculator/
├── index.html                 # Main HTML entry point
├── src/
│   └── lib/
│       └── brewingLogic.js   # Core calculation engine
├── package.json              # Dependencies & scripts
└── README.md                 # This file
```

## Brewing Methods Overview

### Hario V60
- **Grind:** Medium-fine
- **Water temp:** 95-98°C
- **Brew time:** 3-4 minutes
- **Ratio:** 1:16 (default)
- **Notes:** Conical dripper with spiral ridges. Requires technique but produces excellent cups.

### Chemex
- **Grind:** Medium-coarse
- **Water temp:** 95-98°C
- **Brew time:** 4-4.5 minutes
- **Ratio:** 1:15-1:16
- **Notes:** Thick bonded filters create an exceptionally clean cup.

### Aeropress
- **Grind:** Medium-fine
- **Water temp:** 90-95°C (cooler water)
- **Brew time:** 2-3 minutes
- **Ratio:** 1:15-1:16
- **Notes:** Immersion-based, forgiving, and fast. Great for travel.

### Kalita Wave
- **Grind:** Medium
- **Water temp:** 95-98°C
- **Brew time:** 3.5-4 minutes
- **Ratio:** 1:16 (default)
- **Notes:** Flat-bottomed dripper with wave filters. Consistent extraction.

### Pour Over (Generic)
- **Grind:** Medium
- **Water temp:** 95-98°C
- **Brew time:** 3-4 minutes
- **Ratio:** 1:16 (default)
- **Notes:** Universal technique for any flat-bottomed dripper.

## Common Coffee Ratios

| Ratio | Name | Description |
|-------|------|-------------|
| 1:12 | Espresso-style | Very strong, concentrated |
| 1:15 | Strong | Bold, full-bodied cup |
| **1:16** | **Standard** | **Well-balanced, recommended** |
| 1:16.67 | James Hoffmann | Slightly lighter, bright |
| 1:17 | Light | Delicate, tea-like |
| 1:18 | Nordic | Very light, clean flavors |

## Calculation Examples

### Example 1: V60 with 300ml water
- Water: 300ml
- Ratio: 1:16
- Coffee needed: 300 ÷ 16 = **18.75g**
- Bloom water: 18.75 × 2 = **37.5ml**

### Example 2: Chemex with custom ratio
- Water: 500ml
- Ratio: 1:15 (stronger)
- Coffee needed: 500 ÷ 15 = **33.3g**
- Bloom water: 33.3 × 2.5 = **83.25ml**

## API Reference

### `brewingLogic.js`

```javascript
// Calculate coffee amount from water and ratio
calculateCoffee(water, ratio)
// Example: calculateCoffee(300, 16) → 18.75

// Calculate bloom water amount
getBloomWater(method, coffee)
// Example: getBloomWater('v60', 18.75) → 37.5

// Validate recipe parameters
validateRecipe(water, coffee)
// Returns: { valid: boolean, warnings: string[] }

// Get all brewing methods
BREWING_METHODS // Object with method configs
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- Add more brewing methods (Turkish, Moka Pot, etc.)
- Grind size reference chart with photos
- Water quality impact on brewing
- Brew log/history feature
- Timer with notifications
- Favorite recipes saved to localStorage
- Multi-language support
- Dark mode theme

## Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The app will be available at `https://yourusername.github.io/brew-calculator/`

### Deploy to Vercel/Netlify
Simply connect your GitHub repo to Vercel or Netlify. It will auto-deploy on push.

## Troubleshooting Guide

**Coffee tastes too bitter/over-extracted?**
- Use a coarser grind
- Reduce brew time by pouring faster
- Lower water temperature

**Coffee tastes too sour/under-extracted?**
- Use a finer grind
- Increase brew time by pouring slower
- Increase water temperature (if safe)
- Increase bloom time

**Brew drains too fast?**
- Your grind is too coarse
- Make it finer

**Brew drains too slow?**
- Your grind is too fine
- Make it coarser

## Inspiration & Credits

- [Amokka Coffee Brew Guide](https://amokka.com/en/pages/brew-guide-v60) — Design reference
- [James Hoffmann](https://www.youtube.com/@jameshoffmann) — Coffee education
- [Tetsu Kasuya](https://en.wikipedia.org/wiki/Tetsu_Kasuya) — 4:6 brewing method

## License

MIT License © 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software...

See [LICENSE](LICENSE) file for full text.

## Feedback & Support

- 🐛 [Report a bug](https://github.com/yourusername/brew-calculator/issues)
- 💡 [Request a feature](https://github.com/yourusername/brew-calculator/issues)
- ☕ Enjoy great coffee!

---

**Made with ❤️ for coffee lovers everywhere**
