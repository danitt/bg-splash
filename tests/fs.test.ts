import { saveBufferToLocal } from '@src/fs';

describe('FS tests', () => {

  test('Should store buffer locally', async (done) => {
    const newBuffer = Buffer.alloc(2, 0);
    try {
      await saveBufferToLocal(newBuffer, 'buffertest.jpg');
    } catch (e) {
      expect(e).toBeFalsy();
    }
    done();
  });

});
