// config.js
export const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;

// utils/cloudinary.js
export function buildUrl(publicId, { width, height, crop = 'fit' } = {}) {
  const transforms = [
    `w_${width}`,
    `h_${height}`,
    `c_${crop}`,
    `f_auto`,      // auto-format (WebP/AVIF when supported)
    `q_auto:good`  // auto-quality
  ].join(',');
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}.png`;
}
