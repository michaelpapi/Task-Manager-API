
Task Manager API

Overview

The Task Manager API is a backend application designed to manage tasks efficiently. It provides endpoints for creating, reading, updating, and deleting tasks. This API is built using Node.js with Express and is documented with Swagger UI.

Features

- Create, read, update, and delete tasks
- Manage task priorities and statuses
- Swagger documentation for API endpoints
- Comprehensive error handling
- RESTful architecture

Technologies Used

- Node.js: JavaScript runtime for building the backend.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Swagger UI: For interactive API documentation.
- VS Code: Development environment.

Getting Started

Prerequisites

- Node.js: Ensure you have Node.js installed on your machine.
- npm: Node package manager comes with Node.js.
- Git: Version control system for cloning the repository.

Installation

1. Clone the repository*

   ```bash
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies:
```bash
   npm install
   ```
   


Running the API

To start the API, run:

```bash
npm start
```

The API will be running at `http://localhost:3000`.

API Documentation

The API documentation is available through Swagger UI. Once the server is running, navigate to:

```
http://localhost:3000/api-docs
```

Testing

To run tests:

```bash
npm test
```

Usage

You can interact with the API using tools like [Swagger UI](http://localhost:3000/api-docs).

Endpoints

Task Endpoints

- GET /tasks: Retrieve all tasks
- GET /tasks/:id: Retrieve a single task by ID
- POST /tasks: Create a new task
- PUT /tasks/:id: Update a task by ID
- DELETE /tasks/:id: Delete a task by ID

Refer to the [API documentation](http://localhost:3000/api-docs) for detailed information about each endpoint.

Folder Structure

task-api/
│
├── node_modules/            # Dependencies installed by npm
│
├── src/                     # Source code directory
│   ├── controllers/         # Business logic for handling requests
│   │   └── taskController.js
│   │
│   ├── models/              # Database models
│   │   └── taskModel.js
│   │
│   ├── routes/              # API routes
│   │   └── taskRoutes.js
│   │
│   │── task-api.js              # Main application entry point             
│   │   
│   │
│   └── swagger.yaml   
│
│
├── test/                    # Test cases
│   └── task.test.js
│
├── .gitignore               # Git ignore file
├── package.json             # Project metadata and dependencies
├── package-lock.json    # Exact versions of dependencies
└── README.md                # Project documentation


Project Architecture

The application follows a layered architecture:

- Controllers: Handle the request-response cycle.
- Models: Represent the data structure of tasks.
- Routes: Define API endpoints and link them to controller functions.
- Middleware: Manage request parsing and error handling.

Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

