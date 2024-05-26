# Welcome to QuackStack 'NMP' API 🚀

## About the API

Our backend is a RESTful API written with TypeScript and the Express framework. It integrates with a PostgreSQL database and serves content to a React frontend. This API leverages OpenShift for cloud deployment and Docker for containerization.

Documentation is accessible through Swagger.


## Running this API

This Express API requires connection to this applications database to properly respond to requests. This projects docker-compose config will set things up automatically when running localy. There are default values set up for development.

To run with docker compose with hot reload for development, run:
`docker compose up -watch`

## Accessing the API Documentation

If running with docker compose:
`http://localhost:3000/api/api-docs`

*The OpenShift deploy is on its way and will be published soon.*

## Testing the API

This API is tested with Jest framework.

There are suites covering all endpoints. Each suite should test all response statuses and data to ensure proper behaviour of the API.

A test suite for an endpoint should check for status and data to ensure no false positive responses are being created. 
The simplest test looks like:

```
describe('Test the health path', () => {
  test('returns status code 200 if healthy', async () => {
    const res = await testRequest.get('/health');

    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('NMP API is healthy and ready!');
  });
});
```

To run the test suits, just run this command from this backend directory, while the application runs locally with docker compose:
`npm run test`

## Environment Variables

Here's a summary of the essential environment variables:

| Key                 | Example            | Description                                    |
| ------------------- | ------------------ | ---------------------------------------------- |
| `API_HOST`          | `'localhost'`      | Determines the hosting environment.            |
| `API_PORT`          | `'3000'`           | Specifies the host API port.                   |
| `POSTGRES_USER`     | `'dbUsr'`          | PostgreSQL username for database connections.  |
| `POSTGRES_PASSWORD` | `'useASafePasswd'` | PostgreSQL password for database connections.  |
| `POSTGRES_DATABASE` | `'dbName'`         | Name of the PostgreSQL database to connect to. |
| `POSTGRES_HOST`     | `'localhost:1234'` | Address of the PostgreSQL host.                |
| `POSTGRES_PORT`     | `'1234'`           | Port where PostgreSQL is exposed.              |

Written by @GDamaso
