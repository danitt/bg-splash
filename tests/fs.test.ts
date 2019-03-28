import { saveBufferToLocal } from '@src/fs';

describe('FS tests', () => {

  test('Should store buffer locally', async (done) => {
    const newBuffer = Buffer.alloc(2, 0);
    let hasError = false;
    try {
      await saveBufferToLocal(newBuffer, 'buffertest.jpg');
    } catch (e) {
      hasError = true;
    }
    expect(hasError).toBeFalsy();
    done();
  });

});
