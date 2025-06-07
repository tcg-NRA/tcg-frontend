// src/utils/cloudinary.js

// Pull your Cloudinary cloud name from .env
export const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;

// Build a URL with on-the-fly transforms
export function buildUrl(publicId, { width, height, crop = 'fit' } = {}) {
  const parts = [
    `w_${width}`,
    `h_${height}`,
    `c_${crop}`,
    `f_auto`,      // deliver WebP/AVIF when possible
    `q_auto:good`  // auto-optimal quality
  ];
  const transformString = parts.join(',');
  // assumes your public IDs include the folder, e.g. "cards_art/pr_021_2"
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${publicId}.png`;
}
