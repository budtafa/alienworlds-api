import { createApiTestEnvironment } from '../environments';

const environment = createApiTestEnvironment();
environment.initialize();

describe('NFTS API Test', () => {
  it('should return 200', async () => {
    const response = await environment.server.inject({
      method: 'GET',
      url: '/v1/alienworlds/nfts?land_id=1099512961112',
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should return Error if limit is > 1000', async () => {
    const response = await environment.server.inject({
      method: 'GET',
      url: '/v1/alienworlds/nfts?limit=2000',
    });

    expect(response.statusCode).toEqual(500);
  });

  it('should return Error if wrong sort was provided', async () => {
    const response = await environment.server.inject({
      method: 'GET',
      url: '/v1/alienworlds/nfts?sort=FAKE',
    });

    expect(response.statusCode).toEqual(500);
  });
});