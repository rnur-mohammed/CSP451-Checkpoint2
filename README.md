# CSP451 CheckPoint 2 Project

## Project Overview
This repository simulates a three-person development team working on a web project using Git and GitHub. The project demonstrates feature branching, pull requests, merge conflict resolution, and collaborative workflow.

---

## Features

### 1. User Authentication (`feature/user-authentication`)
- Login form added to homepage
- Client-side validation for username and password
- Updated README with feature details

### 2. Database Connection (`feature/database-connection`)
- `database.js` module for database operations
- Query functions implemented: `getAllUsers`, `addUser`
- Updated README with database feature details

### 3. API Endpoints (`feature/api-endpoints`)
- `api.js` module for REST API
- GET `/users` and POST `/users` endpoints implemented
- Updated README with API feature details

---

## Branching Strategy
- `main` — stable branch with merged features
- `feature/user-authentication` — login form and validation
- `feature/database-connection` — database module
- `feature/api-endpoints` — REST API structure

---

## Merge Conflict Simulation
- Intentional conflicts were created in `README.md` between `feature/user-authentication` and `feature/database-connection`
- Conflicts were manually resolved while preserving content from both branches

---

## Collaboration Workflow
- Feature branches created for independent development
- Pull requests (PRs) opened for each feature
- Review comments added for code clarity
- Squash and merge used to maintain a clean commit history

---

## How to Run
1. Clone the repository
```bash
git clone https://github.com/rnur-mohammed/CSP451-Checkpoint2.git
