/**
 * @desc This is a jest test for the /api/developers endpoint
 * @author @GDamaso
 */
import testRequest from './testRequest';

/**
 * @description A simple interface for 'developer' objects
 * from our frontend; Mainly used for initial testing;
 * @author borrowed from @KCaparas1630
 */
export interface DeveloperInterface {
  first_name: string;
  last_name: string;
}

const mockDevelopers: Array<DeveloperInterface> = [
  { first_name: 'G', last_name: 'Damaso' },
  { first_name: 'K', last_name: 'Caparas' },
  { first_name: 'S', last_name: 'Spy' },
];

describe('Test GET /developers against mockDevelopers', () => {
  test('returns status code 200 if connected to database', async () => {
    const res = await testRequest.get('/developers');
    const resDevelopers: Array<DeveloperInterface> = JSON.parse(res.text);

    expect(res.statusCode).toEqual(200);
    expect(resDevelopers.length).toBeGreaterThan(0);
    resDevelopers.forEach((element: DeveloperInterface, index: number) => {
      const mockDev: DeveloperInterface = mockDevelopers[index];
      expect(element.hasOwnProperty('first_name')).toBe(true);
      expect(element.hasOwnProperty('last_name')).toBe(true);
      expect(element).toEqual(mockDev);
    });
  });
}); 
