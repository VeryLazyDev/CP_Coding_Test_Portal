# City Properties Coding Test Portal

[//]: # (![City Properties Logo]&#40;https://joimyanmar.com/assets/images/employerLogo/64afbcd74150e1689238743.jpg&#41;)


## ✅ Project Overview

This project is designed to test the individual skills, knowledge, and experience of potential employees to determine their eligibility to join our team.
The system provides a centralized platform where:
Admins can manage users, create and edit questions, assign tests, and view exam results.
Candidates (such as new or prospective employees) can take coding or knowledge-based tests online.
This platform is ideal for streamline  their hiring process by evaluating technical skills through customized exams 

## 📦 Features
 ### Admin
  - Create users
  -  Create questions
  -  View candidates testing results
 ### User
  - take coding test
  - view testing result


# 🚀 Tech Stack

<div style="display: flex; gap: 10px">
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="Description" width="50"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" alt="Description" width="50"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="Description" width="50"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png" alt="Description" width="45"/>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="Description" width="45"/>
</div>


# ⭐ Getting Start

## 📂 Backend Folder Structure Explanation 

| Folder      | Description                                                               | Partition Type | Layer |
|-------------|---------------------------------------------------------------------------| --- | --- |
| `common/`   | Contains common database connectoins  and common queries for all features | Technical Partition | Shared Utility Layer |
| `admin/`    | Admin Related codes.                                                      | Domain Partition | Domain Layer |
| `user/`     | User Related codes.                                                       | Technical Partition | Infrastructure Layer |
| `prisma/`   | Implements storage-specific services (e.g., file storage).                | Technical Partition | Infrastructure Layer |
| `api/`      | Api routes and endpoints                                                  | Technical Partition | Shared/Service Layer |
| `config/`   | specific config for features                                              | Domain Partition | Persistence Layer |
| `database/` | database connection and query exection for specific feature               | Technical Partition | Infrastructure Layer |
| `util/`     | utility functions for feature                                             | Technical Partition | Infrastructure Layer |



## 📂 Frontend Folder Structure Explanation

| Folder        | Description                         | Partition Type      | Layer                |
|---------------|-------------------------------------|---------------------|----------------------|
| `src/`        | Root folder                         | Technical Partition | Project Layer        |
| `features/`   | includes all features for app       | Domain Partition    | Application Layer    |
| `assets/`     | store images and icons              | Technical Partition | Applcation Layer     |
| `components/` | common components for all features. | Technical Partition | Shared/Service Layer |
| `api/`        | Api routes and endpoints  config    | Technical Partition | Shared/Config Layer  |
| `config/`     | specific config for features        | Technical Partition | Shared/Config Layer  |
| `services/`   | api service for all features        | Technical Partition | Service Layer        |
| `util/`       | utility functions for feature       | Technical Partition | Service Layer        |


### Clone Repositiory

```bash
    git clone https://github.com/VeryLazyDev/CP_Coding_Test_Portal.git
```

### Change Project Directory
```bash
    cd CP_Coding_Test_Portal
```
### Run backend
```bash
    cd backend
```
```bash
    npm run dev
```

### Run frontend
```bash
    cd frontend
```
```bash
    npm run dev
```

    