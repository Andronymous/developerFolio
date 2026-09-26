export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

// Returns the dominant color of a loaded <img> as [r, g, b].
// Like ColorThief, it skips transparent and near-white pixels, then picks the
// most common color bucket and averages the pixels in it.
export const getDominantColor = img => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return undefined;
  ctx.drawImage(img, 0, 0, size, size);

  let pixels;
  try {
    pixels = ctx.getImageData(0, 0, size, size).data;
  } catch (e) {
    // Canvas is tainted by a cross-origin image without CORS headers
    return undefined;
  }

  const buckets = new Map();
  for (let i = 0; i < pixels.length; i += 4) {
    const [r, g, b, a] = [
      pixels[i],
      pixels[i + 1],
      pixels[i + 2],
      pixels[i + 3]
    ];
    if (a < 125 || (r > 250 && g > 250 && b > 250)) continue;
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const bucket = buckets.get(key) || {count: 0, r: 0, g: 0, b: 0};
    bucket.count++;
    bucket.r += r;
    bucket.g += g;
    bucket.b += b;
    buckets.set(key, bucket);
  }

  let best;
  for (const bucket of buckets.values()) {
    if (!best || bucket.count > best.count) best = bucket;
  }
  if (!best) return undefined;
  return [best.r, best.g, best.b].map(v => Math.round(v / best.count));
};
