# 🛒 Aahaas Ecommerce Project (Full Stack)

A full-stack ecommerce product listing application built with:

* **Backend:** Node.js + Express + MySQL
* **Frontend:** React + Vite + Tailwind CSS

This project provides a REST API for products and a responsive frontend UI to display them.

---

## 📁 Project Structure

```
Ecommerce-New/
├── product-api-nodejs/        # Backend (Node.js + Express)
└── product-frontend-react/   # Frontend (React + Vite + Tailwind)
```

---

# ⚙️ Backend Setup (Node.js API)

### ✅ Requirements

* Node.js >= 16
* npm or yarn
* MySQL

---

### 📌 Installation & Setup

```bash
cd product-api-nodejs
npm install
```

---

### 🔐 Environment Configuration

Create a `.env` file:

```env
APP_NAME=Aahaas
NODE_ENV=development
PORT=8000
APP_URL=http://127.0.0.1:8000

DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=aahaas_db
DB_USERNAME=root
DB_PASSWORD=

FRONTEND_URL=http://127.0.0.1:5173
```

---

### 🗄️ Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE aahaas_db;
```

2. Run migrations:

```bash
npm run migrate
```

3. Seed sample data:

```bash
npm run seed
```

---

### ▶️ Run the Server

```bash
# Development (nodemon)
npm run dev

# Production
npm start
```

✅ API Base URL:

```
http://127.0.0.1:8000/api
```

---

### 🔗 API Endpoint

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/api/products` | Get all products |

---

# 🎨 Frontend Setup (React + Vite)

### ✅ Requirements

* Node.js >= 18
* npm / yarn / pnpm

---

### 📌 Installation

```bash
cd product-frontend-react
npm install
```

---

### 🔐 Environment Setup

Create `.env` file:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

### ▶️ Run the Frontend

```bash
npm run dev
```

✅ Open in browser:

```
http://127.0.0.1:5173
```

---

### ✨ Frontend Features

* Responsive product grid
* Search bar with cart counter
* Loading spinner & error handling
* Tailwind animations and hover effects

---

# 🧪 Testing the API

### Using cURL:

```bash
curl http://127.0.0.1:8000/api/products
```

### Using Postman:

* Method: `GET`
* URL: `http://127.0.0.1:8000/api/products`

---

# 🚀 Technologies Used

### Backend

* Node.js
* Express.js
* MySQL
* Sequelize
* dotenv
* nodemon

### Frontend

* React
* Vite
* Tailwind CSS
* Axios (or Fetch API)

---

# 👨‍💻 Author

**Isuru Mapalagama**
Software Engineering Undergraduate | Full Stack Developer

---

# ✅ Future Improvements

* Authentication (Login/Register)
* Shopping Cart & Checkout
* Admin Dashboard
* Payment Gateway Integration

---
