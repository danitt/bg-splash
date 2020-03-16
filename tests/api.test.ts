import { fetchRandomImage } from '@src/unsplash';
import { IImage } from '@src/unsplash.interface';
import { ImageObject } from '@src/typings';

xdescribe('Unsplash API tests', () => {

  test('Should fetch random image from API', async (done) => {
    let randomImage: ImageObject;
    try {
      randomImage = await fetchRandomImage();
    } catch (e) {
      expect(e).toBeFalsy();
    }
    expect(randomImage).not.toBeNull();
    expect(typeof randomImage).toBe('object');
    done();
  });
});
