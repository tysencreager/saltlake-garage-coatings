import sharp from "sharp";

const out = async (size, file) => {
  const info = await sharp("public/SLlogo.svg", { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(file);
  console.log(file, info.width + "x" + info.height);
};

await out(240, "public/SLlogo.png");
await out(64, "public/favicon.png");
console.log("DONE");
