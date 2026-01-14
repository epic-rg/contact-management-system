# Frontend — Contact Management System

This is the frontend of the Contact Management System.  
It provides the public contact form, admin login, and admin dashboard UI.

The frontend is built using **vanilla HTML, CSS, and JavaScript**, focusing on clean structure, separation of concerns, and production-ready behavior.

---

## ✨ Features

- Responsive contact page
- Client-side form validation
- Custom styled radio inputs
- Admin login page
- Protected admin dashboard (via JWT)
- Clear navigation between public and admin flows
- Favicon support
- Clean CSS architecture (base / layout / components)

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Fetch API
- Deployed on Netlify / Vercel

---

## 📁 Folder Structure

frontend/

├── index.html

├── favicon.ico

├── pages/

│ ├── admin-login.html

│ └── admin-dashboard.html

├── css/

│ ├── base.css

│ ├── layout.css

│ └── components.css

├── js/

│ ├── api.js

│ ├── validation.js

│ ├── form.js

│ ├── admin-login.js

│ └── admin-dashboard.js

└── README.md

---

## 🔗 API Integration

The frontend communicates with the backend via REST APIs.

Endpoints used:

- `POST /api/contact` — submit contact form
- `POST /api/auth/login` — admin authentication
- `GET /api/admin/contacts` — fetch all contact messages (protected)

All requests use the **live backend URL** in production.

---

## 🔐 Authentication Flow (Admin)

1. Admin logs in via the login page
2. Backend returns a JWT
3. Token is stored in `localStorage`
4. Dashboard requests include `Authorization: Bearer <token>`
5. Unauthorized access redirects back to login

This ensures admin routes are protected both on the frontend and backend.

---

## ▶️ Running Locally

1. Ensure backend is running
2. Open `index.html` in a browser
3. Update API base URL in `js/api.js` if needed

No build tools or bundlers are required.

---

## 🌍 Deployment Notes

- `index.html` must exist at the frontend root
- API base URLs must point to the deployed backend
- Absolute paths (`/favicon.ico`) are used for shared assets
- Works correctly on static hosting platforms like Netlify

---

## 📌 Notes

This frontend intentionally avoids frameworks to demonstrate:

- Strong fundamentals
- DOM manipulation
- Clean JavaScript architecture
- Realistic production behavior
