# Welcome to QuackStack 'NMP' API 🚀

## About the API

Our backend is a RESTful API written with TypeScript and the Express framework. It integrates with a PostgreSQL database and serves content to a React frontend. This API leverages OpenShift for cloud deployment and Docker for containerization.

Documentation is accessible through Swagger.

## Accessing the API Documentation

http://localhost:3000/api/api-docs

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
