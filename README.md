# User Management API #

## 📁 Project Overview
A RESTful API for managing user data, built with Node.js, Express, and MongoDB. This project demonstrates fundamental backend operations, including CRUD functionality, MongoDB integration, schema validation with Mongoose, and middleware for enhanced request handling.



## 📋 API Endpoints

| Method | Endpoint       | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/users`       | Fetch all users              |
| GET    | `/users/:id`   | Fetch user by MongoDB ID     |
| POST   | `/user`        | Add a new user               |
| PUT    | `/user/:id`    | Update an existing user      |
| DELETE | `/user/:id`    | Delete user by MongoDB ID    |

---

## 🛠️ Technologies Used
- **Node.js** and **Express**: Backend framework
- **MongoDB** and **Mongoose**: Database and ORM for data management
- **Middleware**: Logging and error handling for efficient debugging

---

## 📝 Additional Notes
- Middleware logs request details like HTTP method, URL, and status code.
- Error handling responds with appropriate status codes and messages, ensuring a smooth client experience.