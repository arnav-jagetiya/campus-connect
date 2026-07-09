# Campus Connect

A production-quality campus community platform that brings students, clubs, events, discussions, and campus resources together in a single modern web application.

---

## Overview

Campus Connect is a full-stack web application designed to improve communication and engagement within a college campus. It provides a centralized platform where students can discover events, join clubs, participate in discussions, access shared resources, and stay connected with their campus community.

The project is being built with a strong focus on scalability, maintainability, security, and long-term engineering quality.

---

## Current Milestone

**✅ Project Foundation Completed**

### Next Milestone

- User Authentication & Authorization

---

## Planned Features

- User Authentication & Authorization
- Student Profiles
- Club Management
- Event Management
- Campus Feed
- Notifications
- Resource Sharing
- Admin Dashboard

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- React Hook Form
- Zod

### Backend

- Java 21
- Spring Boot 4
- Spring Security
- Spring Data JPA
- Flyway

### Database

- PostgreSQL

### Development Tools

- Git
- GitHub
- Maven
- npm
- VS Code
- IntelliJ IDEA

---

## Project Structure

```text
campus-connect/
├── backend/          # Spring Boot backend
├── frontend/         # React frontend
├── docs/             # Engineering documents and project documentation
├── .editorconfig
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Java 21
- Node.js
- PostgreSQL 17+
- Maven

---

### Clone the Repository

```bash
git clone https://github.com/arnav-jagetiya/campus-connect.git

cd campus-connect
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

### Backend

Before starting the backend, create a PostgreSQL database named:

```sql
CREATE DATABASE campus_connect;
```

Update the PostgreSQL credentials inside:

```text
backend/src/main/resources/application-dev.yml
```

Then start the backend:

```bash
cd backend

mvn spring-boot:run
```

The backend will be available at:

```
http://localhost:8080
```

---

## Documentation

Project documentation, engineering decisions, and design artifacts are maintained inside the `docs/` directory and evolve alongside the project.

---

## Roadmap

- [x] Project Foundation
- [ ] Authentication & Authorization
- [ ] User Profiles
- [ ] Club Management
- [ ] Event Management
- [ ] Campus Feed
- [ ] Notifications
- [ ] Resource Sharing
- [ ] Admin Dashboard
- [ ] Deployment

---

## Project Status

🚧 **Actively Under Development**

Campus Connect is currently in active development. New features will be implemented incrementally while maintaining production-quality engineering standards.

---

## License

This project is licensed under the MIT License.