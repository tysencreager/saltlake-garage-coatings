import sharp from "sharp";

// Facebook, LinkedIn, and iMessage don't render SVG social cards, so the
// og:image must be a raster. Render the SVG at 2x density and downsample to
// the canonical 1200x630 for crisp text.
const info = await sharp("public/social-card.svg", { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile("public/social-card.png");
console.log("public/social-card.png", info.width + "x" + info.height);
