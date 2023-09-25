# CrisisCrew

CrisisCrew is a comprehensive disaster management and volunteer coordination platform designed to streamline disaster response efforts. Our project aims to empower both volunteers and administrators with the tools they need to effectively manage and respond to crisis situations.

## Directory Structure

The project is organized into the following directories:
```java
CrisisCrew/
│
├── client/
│   ├── public/
│   │   └── index.html
│   │   └── ... (other static assets)
│   ├── src/
│   │   ├── components/
│   │   │   ├── VolunteerRegistration.js             # Component for volunteer registration.
│   │   │   ├── VolunteerAuthentication.js           # Component for volunteer authentication.
│   │   │   ├── VolunteerSkillSet.js                 #Component for tracking volunteer skills.
│   │   │   ├── VolunteerProfileManagement.js        #Component for managing volunteer profiles.
│   │   │   ├── PasswordResetForVolunteers.js        #Component for resetting volunteer passwords.
│   │   │   ├── PaymentGatewayIntegration.js         #Component for payment gateway integration.
│   │   │   └── ...
│   │   ├── App.js    #The main application component.
│   │   └── index.js  # Entry point for the React application 
│   ├── package.json  #Contains client-specific dependencies and scripts.
│   └── ...
│
├── server/
│   ├── routes/
│   │   ├── api/
│   │   │   ├── auth.js  #Authentication-related API routes.
│   │   │   ├── user.js  #User-related API routes
│   │   │   ├── admin.js #Admin-related API routes.
│   │   │   ├── event.js #Event-related API routes
│   │   │   └── ...
│   │   ├── controllers/
│   │   │   ├── userController.js  #Controller for user-related operations.
│   │   │   ├── adminController.js # Controller for admin-related operations.
│   │   │   ├── eventController.js #Controller for event-related operations
│   │   │   └── ...
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js #Middleware for authentication.
│   │   │   └── ...
│   │   └── ...
│   ├── config/
│   │   ├── dbConfig.js #Database configuration.
│   │   └── ...
│   ├── models/
│   │   ├── User.js  #Model for users.
│   │   ├── Admin.js #Model for admins.
│   │   ├── Event.js #Model for events.
│   │   └── ...
│   ├── app.js 
│   ├── server.js #Entry point for the server.
│   ├── package.json
│   └── ...
│
├── admin-panel/
│   ├── admin-panel-frontend/
│   │   ├── public/
│   │   │   └── ... (static assets)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── AdminDashboard.js #Component for the admin dashboard.
│   │   │   │   ├── EventTracking.js #Component for event tracking
│   │   │   │   ├── UserManagement.js # Component for user management.
│   │   │   │   └── ...
│   │   ├── package.json
│   └── ...
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   ├── schema.sql
│
└── public/

```

## Project Database Schema:

### Volunteer Registration
- **Objective:** Add new volunteer records.
-- Volunteer Registration
- **SQL Operation:**
```sql
CREATE TABLE volunteers (
  volunteer_id SERIAL PRIMARY KEY,
  volunteer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO volunteers (volunteer_name, email, password) VALUES
  ('Volunteer 1', 'volunteer1@example.com', 'password1'),
  ('Volunteer 2', 'volunteer2@example.com', 'password2'),
  ('Volunteer 3', 'volunteer3@example.com', 'password3'),
  ('Volunteer 4', 'volunteer4@example.com', 'password4')
```
### Volunteer Skill Set
- **Objective:** Track the skills of each volunteer.
- **SQL Operation:**
```sql
CREATE TABLE skills (
    skill_id SERIAL PRIMARY KEY,
    volunteer_id INT NOT NULL,
    skill_name VARCHAR(50) NOT NULL CHECK (skill_name IN ('First Aid', 'Search and Rescue', 'Medical', 'Logistics', 'Communication', 'Psychological Support', 'Firefighting', 'Navigation')),
    proficiency_level INT CHECK (proficiency_level >= 1 AND proficiency_level <= 10),
    -- Add other columns as needed
);

-- Insert skills data for volunteers

-- Skill data for Volunteer 1
INSERT INTO skills (volunteer_id, skill_name, proficiency_level)
VALUES (1, 'First Aid', 4),
       (1, 'Search and Rescue', 3);
```

### Volunteer Profile Management
- **Objective:** Allow volunteers to manage their profiles.
- **SQL Operation:**
```sql
UPDATE volunteers
SET volunteer_name = 'Updated Name', email = 'updated_email@example.com'
WHERE volunteer_id = 1;
```
### Password Reset for Volunteers
- **Objective:** Reset volunteer passwords.
- **SQL Operation:**
```sql
UPDATE volunteers
SET password = 'new_password'
WHERE volunteer_id = 1;
```
### Disaster Event Tracking
#### Event Logging
- **Objective:** Log new disaster events.
- **SQL Operation:**
```sql
-- Admin Panel --
-- Event Creation (INSERT)
-- Objective: Authorities create a new disaster event.

INSERT INTO events (event_type, location, event_date, required_skills, resource_needs)
VALUES ('Flood', 'City A', '2023-09-30 14:00:00', 'Medical, Logistics', 'Medical supplies, Volunteers');
-- List of Volunteers Who Responded
-- Assuming you have a volunteers_events junction table to track volunteer responses.
-- This is a simplified example. You may need to join multiple tables to get more details.
SELECT v.volunteer_id, v.volunteer_name, v.skills
FROM volunteers v
INNER JOIN volunteers_events ve ON v.volunteer_id = ve.volunteer_id
WHERE ve.event_id = 1;
-- Client Panel --
-- Notification for Matching Volunteers (SELECT)
-- Objective: Identify matching volunteers and send notifications.

SELECT v.volunteer_id, v.volunteer_name, v.skills
FROM volunteers v
WHERE v.location = 'City A' -- Match location
AND v.skills LIKE '%Medical%' -- Match required skills
-- Client Panel --
-- Volunteer Acceptance (INSERT)
-- Objective: Volunteers accept the request to join the event.

INSERT INTO volunteers_events (volunteer_id, event_id, accepted)
VALUES (1, 1, true); -- Example: Volunteer ID 1 accepts Event ID 1


```
## Event Notification System
**Objective: Implement Event Notification System for Disaster Response**
```sql
-- Notification Process
-- When a new disaster event is created, notify volunteers matching the required skills and location.

-- Insert a new disaster event (example)
INSERT INTO events (event_type, location, event_date, required_skills)
VALUES ('Flood', 'City A', '2023-09-30 14:00:00', 'Medical, Rescue');

-- Identify volunteers matching the event's required skills and location
-- Assuming you have a "volunteers" table with columns for volunteer_id, volunteer_name, skills, and location.
-- This is a simplified example, and you may have additional criteria to consider.

DECLARE @event_id INT;
SET @event_id = SCOPE_IDENTITY(); -- Get the ID of the newly created event

INSERT INTO notifications (volunteer_id, event_id)
SELECT v.volunteer_id, @event_id
FROM volunteers v
WHERE CHARINDEX(v.skills, (SELECT required_skills FROM events WHERE event_id = @event_id)) > 0
  AND v.location = (SELECT location FROM events WHERE event_id = @event_id);

-- Volunteers can accept the request and are added as volunteers for that specific disaster event.

-- When a volunteer accepts the request, insert them into the volunteers_events junction table (example).
-- Assuming you have a "volunteers_events" table with columns for volunteer_id and event_id.
-- You may also need to update the event's status or track volunteer responses.

INSERT INTO volunteers_events (volunteer_id, event_id)
VALUES (@volunteer_id, @event_id);

```
## Responded Volunteer Access to Event Details 

**Objective: Allow responded volunteers to access event details.**

SQL Code:
```sql
-- Database Modification (Add event_details field)
ALTER TABLE events ADD COLUMN event_details TEXT;

-- Admin Panel - Update Event Details
-- Example: Update event details for Event ID 1
UPDATE events
SET event_details = 'Detailed information about the event goes here.'
WHERE event_id = 1;

-- Client Panel - Fetch Event Details
-- Example: Fetch event details for Event ID 1
SELECT event_id, event_type, location, event_date, required_skills, resource_needs, event_details
FROM events
WHERE event_id = 1;


```
