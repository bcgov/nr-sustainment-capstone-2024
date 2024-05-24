import { testRequest } from "./testRequest";

describe('Test the health path', () => {
  test('returns status code 200 if healthy', async () => {
    const res = await testRequest.get('/health');

    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('NMP API is healthy and ready!');
  });
});
