/**
 * Core brewing calculation engine
 * Handles ratio calculations, recipe generation, and brewing parameters
 */

export const DEFAULT_RATIOS = {
  standard: { value: 16, name: "Standard (1:16)" },
  strong: { value: 15, name: "Strong (1:15)" },
  light: { value: 17, name: "Light (1:17)" },
  nordic: { value: 18, name: "Nordic (1:18)" },
  hoffmann: { value: 16.67, name: "James Hoffmann (1:16.67)" },
  tetsuKasuya: { value: 15.38, name: "Tetsu Kasuya 4:6 (1:15.38)" },
};

export const BREWING_METHODS = {
  v60: {
    name: "Hario V60",
    displayName: "V60",
    grindSize: "Medium-fine",
    waterTemp: { min: 95, max: 98, recommended: 96 },
    brewTime: { min: 180, max: 240, recommended: 210 },
    bloomTime: 45,
    notes: "Conical dripper with spiral ridges. Requires technique for consistency.",
    bloomRatio: 2,
    steps: [
      { num: 1, title: "Boil & grind", desc: "Boil water to 95-98°C. Grind coffee to medium-fine consistency (like granulated sugar)." },
      { num: 2, title: "Rinse filter", desc: "Place filter in V60 dripper and rinse with hot water to remove paper taste. Discard water." },
      { num: 3, title: "Add coffee", desc: "Pour ground coffee into rinsed filter and level the bed gently." },
      { num: 4, title: "Bloom (45s)", desc: "Start timer and pour twice the water weight. Ensure all grounds are saturated. Wait 45 seconds." },
      { num: 5, title: "First pour", desc: "Pour slowly in circles to reach half your total water weight by 1:15-1:30 min mark." },
      { num: 6, title: "Final pour", desc: "When first pour has mostly drained, pour remaining water to reach total weight by 2:30-3:00 min." },
      { num: 7, title: "Drawdown", desc: "Let the brew finish draining completely." },
      { num: 8, title: "Serve & enjoy", desc: "Pour into your cup and enjoy your fresh coffee!" },
    ]
  },
  chemex: {
    name: "Chemex",
    displayName: "Chemex",
    grindSize: "Medium-coarse",
    waterTemp: { min: 95, max: 98, recommended: 96 },
    brewTime: { min: 240, max: 270, recommended: 255 },
    bloomTime: 45,
    notes: "Thick bonded filters require coarser grind. Produces exceptionally clean cup.",
    bloomRatio: 2.5,
    steps: [
      { num: 1, title: "Boil & grind", desc: "Boil water to 95-98°C. Grind coffee to medium-coarse (slightly coarser than V60)." },
      { num: 2, title: "Rinse filter", desc: "Use Chemex bonded filters. Rinse with hot water and preheat the Chemex." },
      { num: 3, title: "Add coffee", desc: "Pour ground coffee into filter and level the bed." },
      { num: 4, title: "Bloom (45s)", desc: "Pour water at 2.5x coffee weight. Wait 45 seconds." },
      { num: 5, title: "First pour", desc: "Pour in slow circles to reach 50% of total water by 1:30-2:00 min." },
      { num: 6, title: "Second pour", desc: "Continue pouring to 75% of total water by 3:00-3:30 min." },
      { num: 7, title: "Final pour", desc: "Finish pouring to total weight by 4:00-4:30 min." },
      { num: 8, title: "Serve & enjoy", desc: "Let remaining water drain, then pour into carafe and serve." },
    ]
  },
  aeropress: {
    name: "Aeropress",
    displayName: "Aeropress",
    grindSize: "Medium-fine",
    waterTemp: { min: 90, max: 95, recommended: 93 },
    brewTime: { min: 120, max: 180, recommended: 150 },
    bloomTime: 30,
    notes: "Immersion-based. Forgiving and fast. Shorter press = lighter, longer = stronger.",
    bloomRatio: 1.5,
    steps: [
      { num: 1, title: "Boil & grind", desc: "Boil water to 90-95°C. Grind coffee to medium-fine." },
      { num: 2, title: "Assemble & rinse", desc: "Assemble Aeropress and rinse with hot water." },
      { num: 3, title: "Add coffee", desc: "Add ground coffee and level the bed gently." },
      { num: 4, title: "Bloom (30s)", desc: "Pour water at 1.5x coffee weight. Wait 30 seconds." },
      { num: 5, title: "Fill & stir", desc: "Fill the Aeropress to the top and stir gently for 10 seconds." },
      { num: 6, title: "Press slowly", desc: "Place the plunger on top and press down slowly (1-2 min). You should hear a hiss." },
      { num: 7, title: "Remove & serve", desc: "Remove from cup and serve immediately." },
      { num: 8, title: "Tip", desc: "Aeropress is forgiving! Adjust press speed for lighter or stronger coffee." },
    ]
  },
  kalita: {
    name: "Kalita Wave",
    displayName: "Kalita Wave",
    grindSize: "Medium",
    waterTemp: { min: 95, max: 98, recommended: 96 },
    brewTime: { min: 210, max: 240, recommended: 225 },
    bloomTime: 45,
    notes: "Flat-bottomed dripper with wave filters. Consistent extraction due to even saturation.",
    bloomRatio: 2,
    steps: [
      { num: 1, title: "Boil & grind", desc: "Boil water to 95-98°C. Grind to medium." },
      { num: 2, title: "Rinse filter", desc: "Place Kalita-specific filter in dripper and rinse with hot water." },
      { num: 3, title: "Add coffee", desc: "Pour ground coffee and level the bed." },
      { num: 4, title: "Bloom (45s)", desc: "Pour water at 2x coffee weight. Wait 45 seconds." },
      { num: 5, title: "First pour", desc: "Pour in circles to reach 50% water weight by 1:30 min." },
      { num: 6, title: "Second pour", desc: "Continue to 75% water weight by 2:45 min." },
      { num: 7, title: "Final pour", desc: "Finish to total water weight by 3:30-4:00 min." },
      { num: 8, title: "Serve & enjoy", desc: "Kalita's flat bed brews evenly. Enjoy your balanced cup!" },
    ]
  },
  "pour-over": {
    name: "Generic Pour Over",
    displayName: "Pour Over",
    grindSize: "Medium",
    waterTemp: { min: 95, max: 98, recommended: 96 },
    brewTime: { min: 180, max: 240, recommended: 210 },
    bloomTime: 45,
    notes: "Universal technique for any flat-bottomed dripper.",
    bloomRatio: 2,
    steps: [
      { num: 1, title: "Boil & grind", desc: "Boil water to 95-98°C. Grind to medium consistency." },
      { num: 2, title: "Rinse filter", desc: "Rinse filter and dripper with hot water to preheat." },
      { num: 3, title: "Add coffee", desc: "Add ground coffee and create a small well in the center." },
      { num: 4, title: "Bloom (45s)", desc: "Pour 2x coffee weight in water slowly. Wait 45 seconds." },
      { num: 5, title: "Main pour", desc: "Pour in slow, circular motions. Maintain even water level." },
      { num: 6, title: "Keep pouring", desc: "Continuously pour to your target water amount by ~3:00 min." },
      { num: 7, title: "Final drain", desc: "Let any remaining water drain completely." },
      { num: 8, title: "Serve", desc: "Enjoy your freshly brewed pour-over coffee!" },
    ]
  }
};

/**
 * Calculate coffee amount based on water and ratio
 * @param {number} water - Water in ml
 * @param {number} ratio - Coffee-to-water ratio (e.g., 16 for 1:16)
 * @returns {number} Coffee amount in grams
 */
export function calculateCoffee(water, ratio) {
  const coffee = water / ratio;
  return Math.round(coffee * 10) / 10; // Round to 1 decimal
}

/**
 * Calculate water amount based on coffee and ratio
 * @param {number} coffee - Coffee in grams
 * @param {number} ratio - Coffee-to-water ratio
 * @returns {number} Water amount in ml
 */
export function calculateWater(coffee, ratio) {
  const water = coffee * ratio;
  return Math.round(water * 10) / 10;
}

/**
 * Get bloom water amount based on method
 * @param {string} method - Brewing method key
 * @param {number} coffee - Coffee amount in grams
 * @returns {number} Bloom water in ml
 */
export function getBloomWater(method, coffee) {
  const bloomRatio = BREWING_METHODS[method]?.bloomRatio || 2;
  const bloom = coffee * bloomRatio;
  return Math.round(bloom * 10) / 10;
}

/**
 * Generate detailed pour schedule (for future enhancement)
 * @param {number} totalWater - Total water amount
 * @param {number} bloomWater - Bloom pour amount
 * @param {number} totalTime - Total brew time in seconds
 * @returns {Array} Array of pour steps with timing
 */
export function generatePourSchedule(totalWater, bloomWater, totalTime) {
  const remainingWater = totalWater - bloomWater;
  const poursCount = 3; // Bloom + 2 main pours
  const waterPerPour = remainingWater / poursCount;
  const timePerPour = (totalTime - 45) / poursCount; // Subtract bloom time
  
  return [
    {
      step: 1,
      water: bloomWater,
      cumulativeWater: bloomWater,
      time: 0,
      type: "bloom",
      duration: 45
    },
    {
      step: 2,
      water: waterPerPour,
      cumulativeWater: bloomWater + waterPerPour,
      time: 45 + timePerPour,
      type: "pour"
    },
    {
      step: 3,
      water: waterPerPour,
      cumulativeWater: bloomWater + (waterPerPour * 2),
      time: 45 + (timePerPour * 2),
      type: "pour"
    },
    {
      step: 4,
      water: waterPerPour,
      cumulativeWater: totalWater,
      time: 45 + (timePerPour * 3),
      type: "pour"
    }
  ];
}

/**
 * Validate brewing parameters
 * @param {number} water - Water in ml
 * @param {number} coffee - Coffee in grams
 * @returns {Object} Validation result with any warnings
 */
export function validateRecipe(water, coffee) {
  const warnings = [];
  
  if (water < 50) warnings.push("Water amount very small (under 50ml)");
  if (water > 1500) warnings.push("Water amount very large (over 1500ml)");
  if (coffee < 5) warnings.push("Coffee amount very small (under 5g)");
  if (coffee > 100) warnings.push("Coffee amount very large (over 100g)");
  
  const ratio = water / coffee;
  if (ratio < 12) warnings.push("Ratio very strong (under 1:12)");
  if (ratio > 22) warnings.push("Ratio very light (over 1:22)");
  
  return {
    valid: warnings.length === 0,
    warnings
  };
}
