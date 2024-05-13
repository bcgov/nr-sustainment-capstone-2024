// Base Swagger config file, exported as json
// Main specifications should be defined here
// All API endpoints are included in 'apis' attribute and should be in YML

const swaggerConfig = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'NMP - QuackStack API',
      version: '1.0.0',
      description: 'QS NMP API Server',
    },
    servers: [{ url: '/api' }],
  },
  apis: ['./src/docs/*.yml'],
}

export default swaggerConfig
