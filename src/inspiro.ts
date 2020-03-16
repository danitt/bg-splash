// Dependencies
import nodeFetch from 'node-fetch';

// Typings
import { ImageObject } from '@src/typings';

// Constants
const INSPIRO_URL = 'https://inspirobot.me/api?generate=true';

export async function fetchRandomImage(): Promise<ImageObject> {
  const imageSrc = await (await nodeFetch(INSPIRO_URL)).text();
  const imageBuffer = await (await nodeFetch(imageSrc)).buffer();
  // Parse filename
  const regex = new RegExp(/\/a\/(.*)\.jpg/g).exec(imageSrc);
  const filename = regex.length > 1 ? regex[1] : String(new Date().getTime());

  return {
    filename,
    buffer: imageBuffer,
  };
}
