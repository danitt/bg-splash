import { fetchRandomImage, fetchRawImage } from '@src/unsplash';
import { IImage } from '@src/unsplash.interface';

xdescribe('Unsplash API tests', () => {

  test('Should fetch random image from API', async (done) => {
    let randomImage: IImage;
    try {
      randomImage = await fetchRandomImage();
    } catch (e) {
      expect(e).toBeFalsy();
    }
    expect(randomImage).not.toBeNull();
    expect(typeof randomImage).toBe('object');
    done();
  });

  test('Should fetch image buffer from api', async (done) => {
    let imgBuffer: Buffer;
    try {
      const randomImage: IImage = await fetchRandomImage();
      imgBuffer = await fetchRawImage(randomImage);
    } catch (e) {
      expect(e).toBeFalsy();
    }
    expect(Buffer.isBuffer(imgBuffer)).toBeTruthy();
    done();
  });

});
