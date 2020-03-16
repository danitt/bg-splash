import { fetchRandomImage } from '@src/unsplash';
import { updateBackground } from '@src/bg';
import { saveBufferToLocal } from '@src/fs';

// IIFE to launch script, and enable async/await
(async () => {
  // Get random image
  const randomImage = await fetchRandomImage();
  const { filename, buffer } = randomImage;
  // Save to local directory
  await saveBufferToLocal(buffer, filename);
  // Update background
  await updateBackground(filename);

  process.exit();
})();
