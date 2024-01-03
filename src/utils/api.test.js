import { getApiUrl } from './api';

describe('getApiUrl', () => {
  it('should return the correct URL for the /login endpoint', () => {
    const endpoint = '/login';
    const expectedUrl = 'http://devpleno.test/api/login';

    const apiUrl = getApiUrl(endpoint);

    expect(apiUrl).toBe(expectedUrl);
  });
});