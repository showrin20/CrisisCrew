# CrisisCrew

CrisisCrew is a disaster management and volunteer coordination system designed to streamline disaster response efforts. This repository contains the source code for both the client and admin panel components.

## Directory Structure

The project is organized into the following directory structure:

### Client

- **client/public/**: Static files for the client-side, including the main HTML file.
- **client/src/**: React.js components for the client-side.
  - **client/src/components/**: React components for various functionalities.
  - **client/src/App.js**: Main application component.
  - **client/src/index.js**: Entry point for the client-side application.
- **client/package.json**: Client-specific dependencies.

### Server

- **server/routes/api/**: Backend API routes.
- **server/controllers/**: Controllers for handling API requests.
- **server/middleware/**: Middleware for authentication and other purposes.
- **server/config/**: Configuration files.
- **server/models/**: Database models.
- **server/app.js**: Express.js application setup.
- **server/server.js**: Entry point for the server.
- **server/package.json**: Server-specific dependencies.

### Admin Panel

- **admin-panel/admin-panel-frontend/public/**: Static files for the admin panel's frontend.
- **admin-panel/admin-panel-frontend/src/**: React.js components for the admin panel's frontend.
  - **admin-panel/admin-panel-frontend/src/components/**: React components for admin panel functionality.
- **admin-panel/admin-panel-frontend/package.json**: Admin Panel Frontend-specific dependencies.
- **admin-panel/routes/api/**: Backend API routes for the admin panel.
- **admin-panel/controllers/**: Controllers for handling admin panel API requests.
- **admin-panel/middleware/**: Middleware for admin panel authentication and other purposes.
- **admin-panel/config/**: Configuration files for the admin panel.
- **admin-panel/models/**: Database models for the admin panel.
- **admin-panel/app.js**: Express.js application setup for the admin panel backend.
- **admin-panel/package.json**: Admin Panel-specific dependencies.

### Database

- **database/migrations/**: Database schema migrations.
- **database/seeds/**: Seed data for the database.
- **database/schema.sql**: SQL schema definition for the database.

### Public

- **public/**: Public assets shared between components.

### Other

- **.gitignore**: Gitignore file to exclude specific files and directories from version control.
- **package.json**: Project-wide dependencies and scripts.
- **README.md**: This README file.

## Getting Started

To get started with CrisisCrew, follow the setup instructions for each component (client, server, and admin panel) as outlined in their respective README files.


