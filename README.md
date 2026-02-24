<div align="center">
  <a href="https://github.com/Saadbarki/nexora-admin">
    <img src="https://avatars.githubusercontent.com/u/50052356?s=200&v=4" width="128px" alt="Nexora Logo" />
  </a>
  <h1>Nexora Admin</h1>
  <p><strong>Professional Open Source ERP / CRM Solution</strong></p>
  <p>Streamline Invoicing, Quoting, and Client Management with a Modern MERN Stack Architecture.</p>

  <p>
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
    <img src="https://img.shields.io/badge/License-AGPL%203.0-blue.svg" />
    <img src="https://img.shields.io/badge/Stack-MERN-informational.svg" />
    <img src="https://img.shields.io/badge/UI-Ant%20Design-red.svg" />
  </p>
</div>

---

## 📖 Introduction
**Nexora Admin** is a highly customizable Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) system. Designed for speed and ease of use, it allows businesses to handle the full sales lifecycle—from lead management to final accounting—within a single, responsive dashboard.

---

## 💻 Technology Stack

Nexora is built using a modern decoupled architecture:

### **Frontend**
* **React.js:** Core library for building the user interface.
* **Redux:** Global state management for consistent data across the app.
* **Ant Design (AntD):** A high-quality React UI library for professional enterprise components.
* **Axios:** For handling API communication with the backend.

### **Backend**
* **Node.js & Express.js:** Fast, unopinionated, minimalist web framework for the API layer.
* **MongoDB:** NoSQL database for flexible data storage.
* **Mongoose:** Elegant MongoDB object modeling (ODM).
* **JWT & Bcrypt:** Secure authentication and password hashing.

### **DevOps & Tools**
* **Docker:** Containerized environment for consistent deployment.
* **GitHub Actions:** Automated repository statistics and CI/CD ready.

---

## 🏗️ Project Structure

```text
├── backend/            # Express API, Mongoose Models, Controllers
├── frontend/           # React App, Redux Store, AntD Components
├── docker-compose.yml  # Multi-container orchestration
└── .github/            # CI/CD Workflows (Repo Stats)
