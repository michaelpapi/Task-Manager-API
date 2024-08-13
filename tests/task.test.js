const request = require('supertest');
const { app, server } = require('../src/task-api'); // Import server

afterAll((done) => {
  if (server) server.close(done); // Close the server after tests
  else done();
});

describe('Task API', () => {
  let taskId;

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'Test Description',
        due_date: '2024-08-31',
        status: 'pending'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    taskId = response.body.id; // Save ID for further tests
  });

  it('should retrieve all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a task by ID', async () => {
    const response = await request(app).get(`/api/tasks/${taskId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', taskId);
  });

  it('should update a task', async () => {
    const response = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({
        title: 'Updated Task',
        description: 'Updated Description',
        due_date: '2024-08-31',
        status: 'completed'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Updated Task');
  });

  it('should delete a task', async () => {
    const response = await request(app).delete(`/api/tasks/${taskId}`);
    expect(response.statusCode).toBe(204); // No content expected
  });
});
