import { fetchRandomImage, fetchRawImage } from '@src/api';
import { updateBackgroundTab } from '@src/bg';
import { saveBufferToLocal } from '@src/fs';

// IIFE to launch script, and enable async/await
(async () => {
  // Get random image
  const randomImage = await fetchRandomImage();
  const imageBuffer = await fetchRawImage(randomImage);
  // Save to local directory
  const imgName = `${randomImage.id}.jpg`;
  await saveBufferToLocal(imageBuffer, imgName);
  // Update background
  await updateBackgroundTab(imgName);

  process.exit();
})();
