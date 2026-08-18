import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "../public");

async function optimizeFavicon(filePath, maxDim, quality) {
  if (!fs.existsSync(filePath)) return;
  const fileBuffer = fs.readFileSync(filePath);
  const buffer = await sharp(fileBuffer)
    .resize(maxDim, maxDim, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: quality || 80, compressionLevel: 9, palette: true })
    .toBuffer();
  fs.writeFileSync(filePath, buffer);
  const statAfter = fs.statSync(filePath);
  console.log(
    `Optimized ${path.relative(publicDir, filePath)}: ${(fileBuffer.length / 1024).toFixed(1)}KB -> ${(statAfter.size / 1024).toFixed(1)}KB`,
  );
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileBuffer = fs.readFileSync(filePath);
  let image = sharp(fileBuffer);
  const metadata = await image.metadata();

  let width = metadata.width;
  let height = metadata.height;
  if (width > 1200 || height > 1200) {
    image = image.resize(1200, 1200, { fit: "inside", withoutEnlargement: true });
  }

  let buffer;
  if (ext === ".png") {
    buffer = await image.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
  } else if (ext === ".jpg" || ext === ".jpeg") {
    buffer = await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  } else if (ext === ".webp") {
    buffer = await image.webp({ quality: 80 }).toBuffer();
  } else {
    return;
  }

  if (buffer.length < fileBuffer.length) {
    fs.writeFileSync(filePath, buffer);
    console.log(
      `Optimized ${path.relative(publicDir, filePath)} (${width}x${height}): ${(fileBuffer.length / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB`,
    );
  } else {
    console.log(
      `Kept original ${path.relative(publicDir, filePath)}: ${(fileBuffer.length / 1024).toFixed(1)}KB`,
    );
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) {
      if (entry.name === "favicon.png") {
        await optimizeFavicon(fullPath, 192, 80);
      } else if (entry.name === "favicon.ico") {
        await optimizeFavicon(fullPath, 48, 80);
      } else {
        await optimizeImage(fullPath);
      }
    }
  }
}

async function run() {
  console.log("Starting image optimization...");
  const rootIco = path.join(publicDir, "favicon.ico");
  if (fs.existsSync(rootIco)) {
    const statBefore = fs.statSync(rootIco);
    const buffer = await sharp(rootIco)
      .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
    fs.writeFileSync(rootIco, buffer);
    console.log(
      `Optimized root favicon.ico: ${(statBefore.size / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB`,
    );
  }

  await processDirectory(publicDir);
  console.log("Image optimization complete!");
}

run().catch(console.error);
