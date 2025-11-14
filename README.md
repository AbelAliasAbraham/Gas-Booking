# Gas-Booking-using-React-and-Node.js

This project is a complete application for managing user authentication and booking gas cylinders, built using the **MERN** (MongoDB, Express, React, Node.js) stack. It prioritizes secure user management and a straightforward booking process.

***

## 💡 Key Features

### User & Security
* **Secure Authentication:** User sessions are managed via **JWT** (JSON Web Tokens), and passwords are **hashed** with `bcryptjs`.
* **Protected Routes:** The Dashboard (`/dashboard`) is protected by client-side logic and backend middleware, ensuring only authenticated users have access.
* **Validation:** Both client-side (in `LoginRegister.jsx`) and server-side validation are enforced for strong passwords, 10-digit phone numbers, and unique email addresses.

### Core Functionality
* **Booking:** Users can book cylinders of **5kg, 14.2kg, or 19kg** with payment options for **Cash on Delivery** or **Card (Online)**.
* **Dashboard:** Displays essential **Account Details** and dynamically fetches and displays the user's ordered **Booking History**.
* **Structure:** Uses **React Context** (`useAuth`) for global state management and **Tailwind CSS** for a responsive, component-based styling approach.

---

## 🛠️ Project Structure and Dependencies

### 1. Backend (Server) Setup

The backend is an Express server handling API, database (MongoDB via Mongoose), and security.

| File/Directory | Description |
| :--- | :--- |
| `server.js` | Main entry point; sets up Express, CORS, connects to MongoDB, and registers the Auth and Booking routers. |
| `routes/auth.js` | Handles user registration, login, token validation (`GET /me`), and forgot password requests. |
| `routes/booking.js` | Handles new bookings (`POST /book`) and fetching a user's booking history (`GET /history`). |
| `models/User.js` | Mongoose schema for user details (including unique email/phone). |
| `models/Booking.js` | Mongoose schema for booking details (cylinder type, payment, status, delivery date). |
| `middleware/auth.js` | Contains the `protect` middleware function to verify the JWT for secure routes. |
| `.env` | Stores configuration variables. |

#### Server Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`express`** | The core web server framework. |
| **`mongoose`** | MongoDB ORM for data interaction. |
| **`dotenv`** | Loads environment variables. |
| **`cors`** | Enables cross-origin requests. |
| **`jsonwebtoken`** | Creating and verifying JWT session tokens. |
| **`bcryptjs`** | For hashing user passwords. |

---

### 2. Frontend (Client) Setup

The frontend is a React application managing the UI, routing, and user experience.

| File/Directory | Description |
| :--- | :--- |
| `main.jsx` | Renders the application root. |
| `App.jsx` | Main component defining client-side routes (public and protected) and wrapping in `AuthProvider`. |
| `useAuth.jsx` | Custom hook for managing the authentication state globally and checking token validity. |
| `LoginRegister.jsx` | All authentication forms (Login, Register, Forgot Password) in one component. |
| `Dashboard.jsx` | Protected area displaying account information and booking functionality. |
| `index.css` / `App.css` | Global styles, including **Tailwind CSS directives**. |

#### Client Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`react`** / **`react-dom`** | Core libraries for building the UI. |
| **`react-router-dom`** | Client-side routing. |
| **`tailwindcss`** | Utility-first CSS framework for styling. |
| **`postcss`** / **`autoprefixer`** | Tools for compiling and optimizing CSS. |

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
    # Open your first terminal and run:
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
3.  **Start the Client:** The application will typically open in your browser on a port like `http://localhost:3000`.
    ```bash
    # Open your second terminal and run:
    npm run dev
    # (or npm start, depending on your setup)
    ```

> **Note:** The backend API and frontend application must be running concurrently in **two separate terminal windows** for the full application to function.
