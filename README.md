# Gas-Booking-using-React-and-Node.js

This project is a full-stack application for managing user authentication and booking gas cylinders. It is built using the **MERN** (MongoDB, Express, React, Node.js) architecture with a focus on modern component design and secure API practices.

---

## 💡 Key Features

### User & Security
* **Secure Authentication:** User registration, login, and token validation secured with **JWT** (JSON Web Tokens). Passwords are **hashed** using `bcryptjs`.
* **Protected Routes:** The Dashboard is protected, automatically redirecting unauthenticated users to the Login page via the client-side `ProtectedRoute` component.
* **Validation:** Robust client-side validation in `LoginRegister.jsx` for email, 10-digit phone number, and strong password format (6+ chars, 1 number, 1 special char).

### Core Functionality
* **Cylinder Booking:** Allows authenticated users to book cylinders of **5kg, 14.2kg, or 19kg**.
* **Payment Options:** Supports **Cash on Delivery** and **Card (Online)** payment methods.
* **Dashboard:** Provides a personalized view of **Account Details** and a dynamically loaded **Booking History** table (sorted by most recent).
* **Styling:** A clean, responsive design using **Tailwind CSS** directives and custom styling.

---

## 🛠️ Project Structure and Dependencies

### 1. Backend (Server) Setup

The backend handles API routing, business logic, database interaction, and authentication/authorization.

| File/Directory | Description |
| :--- | :--- |
| `server.js` | Main entry point; sets up Express, connects to MongoDB, and defines top-level API routes (`/api/auth`, `/api/booking`). |
| `routes/auth.js` | Router for user management: `POST /register`, `POST /login`, `POST /forgot-password`, and the token validation endpoint `GET /me`. |
| `routes/booking.js` | Router for booking operations: `POST /book` (creates a new booking) and `GET /history` (fetches user's past bookings). |
| `models/User.js` | Mongoose schema for user data (name, unique email/phone, hashed password). |
| `models/Booking.js` | Mongoose schema for cylinder booking data (links to `userId`, cylinder type, payment method, dates, status). |
| `middleware/auth.js` | Contains the `protect` middleware function to extract and verify the JWT from the `Authorization` header. |
| `.env` | Stores configuration variables like `MONGO_URI` and `JWT_SECRET`. |

#### Server Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`express`** | The core web application framework. |
| **`mongoose`** | MongoDB ORM for data modeling and interaction. |
| **`dotenv`** | To securely load environment variables from `.env`. |
| **`cors`** | To enable cross-origin requests from the frontend. |
| **`jsonwebtoken`** | For creating and verifying JSON Web Tokens (JWTs). |
| **`bcryptjs`** | For hashing user passwords securely. |

---

### 2. Frontend (Client) Setup

The frontend is a React application managing all user interfaces and state.

| File/Directory | Description |
| :--- | :--- |
| `main.jsx` | Renders the main React `<App />` component using `index.css`. |
| `App.jsx` | Defines the main routing structure (`BrowserRouter`, `Routes`) and implements the `ProtectedRoute` component. |
| `useAuth.jsx` | Custom React Context hook managing the global authentication state (`token`, `login`, `logout`, `validateToken`). |
| `Header.jsx` | Navigation bar; dynamically shows **Dashboard/Logout** or **Login** based on authentication status. |
| `Footer.jsx` | Site-wide footer component. |
| `Home.jsx` / `About.jsx` | Simple static public pages. |
| `LoginRegister.jsx` | Component handling the UI and logic for Login, Registration, and Forgot Password. |
| `Dashboard.jsx` | Protected component for displaying account info and managing new bookings/history. |
| `index.css` | Global styles, including **Tailwind CSS directives**. |

#### Client Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`react`** / **`react-dom`** | Core libraries for building the UI. |
| **`react-router-dom`** | Client-side routing library. |
| **`tailwindcss`** | Utility-first CSS framework for styling. |
| **`postcss`** / **`autoprefixer`** | Tools for processing and optimizing CSS (required by Tailwind). |

---

## 🚀 Getting Started

You will need **Node.js** and a running **MongoDB** instance.

### 1. Backend (Server) Setup

1.  **Navigate** to the server directory:
    ```bash
    cd <server-directory-name>
    ```
2.  **Install Dependencies:**
    ```bash
    npm install express mongoose dotenv cors jsonwebtoken bcryptjs
    ```
3.  Create a **`.env`** file with your configuration:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/gasbooking
    JWT_SECRET=mySuperSecretKey123
    ```
4.  **Start the Server:** The API will run on `http://localhost:5000`.
    ```bash
    node server.js
    ```

### 2. Frontend (Client) Setup

1.  **Navigate** to the client directory:
    ```bash
    cd <client-directory-name>
    ```
2.  **Install Dependencies:**
    ```bash
    # Install core libraries
    npm install react react-dom react-router-dom

    # Install Tailwind/CSS tooling
    npm install -D tailwindcss postcss autoprefixer
    ```
3.  **Start the Client:** The application will typically open in your browser on the designated port (e.g., 3000 or 5173 for Vite).
    ```bash
    npm run dev
    # or npm start
    ```
