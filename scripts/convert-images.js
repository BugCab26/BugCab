const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "../public/images");
const files = ["logo.png", "Bug fix.png", "Bug 1.png"];

files.forEach((file) => {
  const filePath = path.join(imagesDir, file);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const destPath = path.join(imagesDir, `${name}.webp`);

    sharp(filePath)
      .webp({ quality: 90 })
      .toFile(destPath)
      .then(() => {
        console.log(`Converted ${file} to ${name}.webp`);
      })
      .catch((err) => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
