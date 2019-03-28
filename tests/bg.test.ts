import { updateBackground } from '@src/bg';

describe('Background saving tests', () => {

  test('Should update local background', async (done) => {
    try {
      await updateBackground('test.jpg');
    } catch (e) {
      expect(e).toBeFalsy();
    }
    done();
  });

});
