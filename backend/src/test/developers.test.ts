/**
 * @desc This is a jest test for the /api/developers endpoint
 * @author @GDamaso
 */
import testRequest from './testRequest';

describe('Test the developers path', () => {
  test('returns status code 200 if connected to database', async () => {
    const res = await testRequest.get('/developers');

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('[{\"first_name\":\"G\",\"last_name\":\"Damaso\"},{\"first_name\":\"K\",\"last_name\":\"Caparas\"},{\"first_name\":\"S\",\"last_name\":\"Spy\"}]');
  });
});
