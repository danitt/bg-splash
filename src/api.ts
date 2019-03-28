// Environment vars
import * as dotenv from 'dotenv';
dotenv.config();

// Dependencies
import fetch from 'node-fetch';
import * as qs from 'qs';

// Typings
import { IImage } from '@src/api.interface';

export async function fetchRandomImage(): Promise<IImage> {
  // Compose URL
  const baseUrl = `https://api.unsplash.com/photos/random`;
  const queryParams = {
    client_id: process.env.UNSPLASH_CLIENT_ID,
    collections: process.env.UNSPLASH_COLLECTION,
  };
  const fullUrl = [
    baseUrl,
    qs.stringify(queryParams),
  ].join('?');
  const res = await (await fetch(fullUrl)).json();
  return res;
}

export async function fetchRawImage(image: IImage): Promise<Buffer> {
  // Prepare query
  const baseUrl = image.urls.raw;
  const queryParams = {
    q: '85',      // quality
    w: '1920',  // width
  };
  const fullUrl = [
    baseUrl,
    qs.stringify(queryParams),
  ].join('?');
  // Fetch image as blob
  const data = await (await fetch(fullUrl)).buffer();
  return data;
}
