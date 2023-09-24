# CrisisCrew

CrisisCrew is a disaster management and volunteer coordination system designed to streamline disaster response efforts. This repository contains the source code for both the client and admin panel components.

CrisisCrew/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── VolunteerRegistration.js
│   │   │   ├── VolunteerAuthentication.js
│   │   │   ├── VolunteerSkillSet.js
│   │   │   ├── VolunteerProfileManagement.js
│   │   │   ├── PasswordResetForVolunteers.js
│   │   │   ├── PaymentGatewayIntegration.js
│   │   │   ├── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── ...
│   ├── package.json (Client-specific dependencies)
├── server/
│   ├── routes/
│   │   ├── api/
│   │   │   ├── auth.js
│   │   │   ├── user.js
│   │   │   ├── admin.js
│   │   │   ├── event.js
│   │   │   ├── ...
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── adminController.js
│   │   ├── eventController.js
│   │   ├── ...
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── config/
│   │   ├── dbConfig.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Admin.js
│   │   ├── Event.js
│   │   ├── ...
│   ├── app.js
│   ├── server.js
│   ├── package.json (Server-specific dependencies)
├── admin-panel/
│   ├── admin-panel-frontend/
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   ├── ...
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── AdminDashboard.js
│   │   │   │   ├── EventTracking.js
│   │   │   │   ├── UserManagement.js
│   │   │   │   ├── ...
│   │   ├── package.json (Admin Panel Frontend-specific dependencies)
│   ├── routes/
│   │   ├── api/
│   │   │   ├── adminRoutes.js
│   │   │   ├── eventRoutes.js
│   │   │   ├── ...
│   ├── controllers/
│   │   ├── adminControllers.js
│   │   ├── eventControllers.js
│   │   ├── ...
│   ├── middleware/
│   ├── config/
│   ├── models/
│   ├── app.js
│   ├── package.json (Admin Panel-specific dependencies)
├── database/
│   ├── migrations/
│   ├── seeds/
│   ├── schema.sql
├── public/
│   ├── ...
├── .gitignore
├── package.json (Project-wide dependencies and scripts)
├── README.md



