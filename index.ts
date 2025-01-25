import express from 'express';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

// Import or define your OpenAPI spec
const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API documentation using Swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/hello': {
      get: {
        summary: 'Returns a hello world message',
        responses: {
          '200': {
            description: 'A hello world response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// Swagger UI endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

// Define routes
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/docs`);
});
