import * as minimist from 'minimist';

import { fetchRandomImage as fetchUnsplash } from '@src/unsplash';
import { fetchRandomImage as fetchInspiro } from '@src/inspiro';
import { updateBackground } from '@src/bg';
import { saveBufferToLocal } from '@src/fs';

// Parse CLI Flags
const args = minimist(process.argv.slice(2));

// Determine image source
const sourceFlag = Object.entries(args).find(([key]) => key === 'source')
const fetchFn = sourceFlag && sourceFlag[1] === 'inspiro' ? fetchInspiro : fetchUnsplash;

// IIFE to launch script, and enable async/await
(async () => {
  // Get random image
  const randomImage = await fetchFn();
  const { filename, buffer } = randomImage;
  // Save to local directory
  await saveBufferToLocal(buffer, filename);
  // Update background
  await updateBackground(filename);

  process.exit();
})();
