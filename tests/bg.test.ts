import { updateBackground } from '@src/bg';

describe('Background saving tests', () => {

  test('Should update local background', async (done) => {
    let err = null;
    try {
      await updateBackground('test.jpg');
    } catch (e) {
      err = e;
    }
    expect(err).toBeFalsy();
    done();
  });

});
