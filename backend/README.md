# Backend — Contact Management System

This is the backend API for the Contact Management System.

It handles contact form submissions, data persistence, admin authentication, and protected admin routes using JWT.

---

## 🚀 Features

- RESTful API built with Express
- MongoDB persistence using Mongoose
- Admin authentication with JSON Web Tokens (JWT)
- Protected admin routes
- Environment-based configuration
- Clean separation of routes, controllers, models, and middleware

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- dotenv
- CORS

---

## 📁 Folder Structure

backend/

├── src/

│ ├── config/

│ │ └── db.js

│ ├── controllers/

│ │ ├── contact.controller.js

│ │ ├── auth.controller.js

│ │ └── admin.controller.js

│ ├── middleware/

│ │ └── auth.middleware.js

│ ├── models/

│ │ └── Contact.js

│ │ ├── contact.routes.js

│ │ ├── auth.routes.js

│ │ └── admin.routes.js

│ ├── app.js

│ └── server.js

├── .env.example

├── package.json

└── README.md

---

## 🔑 Environment Variables

Create a `.env` file in the backend root with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=demo123
```

 > These credentials are intended for demo purposes only.

---

## ▶️ Running Locally

Install dependencies:

```bash
npm install
npm run dev
```

The server will start at:

```arduino
http://localhost:5000
```

## 📡 API Endpoints

### Public

#### `POST /api/contact`

Submit a contact form message.

---

### Authentication

#### `POST /api/auth/login`

Admin login — returns a JWT on successful authentication.

---

### Admin (Protected)

#### `GET /api/admin/contacts`

Fetch all contact messages.

### Required Header

```http
Authorization: Bearer <token>
```

## 🔐 Authentication & Authorization

- Admin login issues a JWT upon successful authentication  
- Protected routes require a valid JWT in the `Authorization` header  
- Tokens expire automatically and must be refreshed by logging in again  

---

## 🌍 Deployment

- Deployed as a **Web Service** on **Render / Railway**  
- **MongoDB Atlas** is used as the production database  
- Environment variables are managed via the hosting dashboard  
- Any change to environment variables triggers an automatic service restart  

---

## 📌 Notes

This backend is designed to simulate a real-world business system with:

- Secure access control  
- Persistent storage  
- Clear and predictable API contracts  
