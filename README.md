# CrisisCrew

CrisisCrew is a comprehensive disaster management and volunteer coordination platform designed to streamline disaster response efforts. Our project aims to empower both volunteers and administrators with the tools they need to effectively manage and respond to crisis situations.

## Directory Structure

The project is organized into the following directories:

### `client/`

The client directory contains the front-end code for the CrisisCrew project. It includes the following subdirectories and files:

- `public/`: Contains HTML and other static assets.
  - `index.html`: The main HTML file.
  - ...

- `src/`: Contains the React components and application logic.
  - `components/`: Houses React components for various functionalities.
    - `VolunteerRegistration.js`: Component for volunteer registration.
    - `VolunteerAuthentication.js`: Component for volunteer authentication.
    - `VolunteerSkillSet.js`: Component for tracking volunteer skills.
    - `VolunteerProfileManagement.js`: Component for managing volunteer profiles.
    - `PasswordResetForVolunteers.js`: Component for resetting volunteer passwords.
    - `PaymentGatewayIntegration.js`: Component for payment gateway integration.
    - ...

  - `App.js`: The main application component.
  - `index.js`: Entry point for the React application.
  - ...

- `package.json`: Contains client-specific dependencies and scripts.

### `server/`

The server directory contains the back-end code for the CrisisCrew project. It includes the following subdirectories and files:

- `routes/`: Contains API route handlers.
  - `api/`: Subdirectory for different API routes.
    - `auth.js`: Authentication-related API routes.
    - `user.js`: User-related API routes.
    - `admin.js`: Admin-related API routes.
    - `event.js`: Event-related API routes.
    - ...

- `controllers/`: Contains controllers for handling business logic.
  - `userController.js`: Controller for user-related operations.
  - `adminController.js`: Controller for admin-related operations.
  - `eventController.js`: Controller for event-related operations.
  - ...

- `middleware/`: Contains middleware for request processing.
  - `authMiddleware.js`: Middleware for authentication.

- `config/`: Configuration files.
  - `dbConfig.js`: Database configuration.

- `models/`: Contains data models.
  - `User.js`: Model for users.
  - `Admin.js`: Model for admins.
  - `Event.js`: Model for events.
  - ...

- `app.js`: The main server application.
- `server.js`: Entry point for the server.
- `package.json`: Contains server-specific dependencies and scripts.

### `admin-panel/`

The admin-panel directory contains the front-end and back-end code for the CrisisCrew admin panel. It includes the following subdirectories and files:

- `admin-panel-frontend/`: Front-end code for the admin panel.
  - `public/`: Contains HTML and other static assets for the admin panel.
  - `src/`: Contains React components and application logic for the admin panel.
    - `components/`: Houses React components for admin functionalities.
      - `AdminDashboard.js`: Component for the admin dashboard.
      - `EventTracking.js`: Component for event tracking.
      - `UserManagement.js`: Component for user management.
      - ...

    - `package.json`: Contains admin panel front-end-specific dependencies and scripts.

- `routes/`: Contains API route handlers for the admin panel.
  - `api/`: Subdirectory for different API routes.
    - `adminRoutes.js`: API routes for admin functionality.
    - `eventRoutes.js`: API routes for event-related functionality.
    - ...

- `controllers/`: Controllers for handling admin panel business logic.
  - `adminControllers.js`: Controller for admin-related operations.
  - `eventControllers.js`: Controller for event-related operations.
  - ...

- `middleware/`: Middleware for the admin panel.
- `config/`: Configuration files.
- `models/`: Data models.
- `app.js`: Main application file for the admin panel.
- `package.json`: Contains admin panel-specific dependencies and scripts.

### `database/`

The database directory contains database-related files:

- `migrations/`: Database migration scripts.
- `seeds/`: Seed data for the database.
- `schema.sql`: SQL schema for the database.

### `public/`

The public directory contains public assets used by the project.

## Project Objectives

### Volunteer Registration
- **Objective:** Add new volunteer records.
-- Volunteer Registration
- **SQL Operation:**
```sql
INSERT INTO volunteers (column1, column2, ...)
VALUES (value1, value2, ...);


### Volunteer Authentication
- **Objective:** Authenticate volunteers by verifying their credentials.
- **SQL Operation:**
```sql
SELECT column1, column2, ...
FROM volunteers
WHERE condition;
```
### Volunteer Skill Set
- **Objective:** Track the skills of each volunteer.
- **SQL Operation:**
```sql
UPDATE skills
SET skill1 = value1, skill2 = value2, ...
WHERE volunteer_id = 'volunteer_id';
```

### Volunteer Profile Management
- **Objective:** Allow volunteers to manage their profiles.
- **SQL Operation:**
```sql
UPDATE profiles
SET field1 = value1, field2 = value2, ...
WHERE volunteer_id = 'volunteer_id';
```
### Password Reset for Volunteers
- **Objective:** Reset volunteer passwords.
- **SQL Operation:**
```sql
UPDATE volunteers
SET password = 'new_password'
WHERE volunteer_id = 'volunteer_id';
```
