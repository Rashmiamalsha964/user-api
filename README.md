"# User API Project" 


This is a simple REST API built using **Node.js, Express, and MongoDB** for managing users. It supports basic CRUD operations and is tested using Postman.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman (for testing)

---
## Architecture Pattern

This project follows a **Controller-based architecture**:

- Routes → Handle endpoints
- Controllers → Business logic
- Models → Database schema
- Config → Database connection

##  Setup Instructions

### 1. Install dependencies
- npm install

### 2. Create .env file
PORT=5000

MONGO_URI=mongodb+srv://2021sp086_db_user:XTb3hlVOMxE2jn3U@cluster0.0f0o7zw.mongodb.net/?appName=Cluster0

JWT_SECRET=your_secret_key

### 3. Run Server
- node server.js
