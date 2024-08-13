const express = require('express');
const bodyParser = require('body-parser');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

// Load Swagger documentation
const swaggerDocument = YAML.load('./src/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use('/api', require('./routes/taskRoutes'));

const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') { // Avoid logging during tests
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
  }
});

module.exports = { app, server };
