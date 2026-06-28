# User Management CRUD Application

A simple CRUD (Create, Read, Update, Delete) web application built using **Node.js**, **Express.js**, **EJS**, and **MySQL**. This project demonstrates how to perform basic database operations through a clean web interface.

---

## Features

* View all users
* Edit an existing user's username
* Update user information in the MySQL database
* Delete users
* Dynamic pages using EJS templates
* Method Override for handling PATCH and DELETE requests
* MySQL database integration

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* EJS
* Method Override
* UUID
* Faker.js (for generating sample users)

---

## Project Structure

```
project/
│
├── views/
│   ├── home.ejs
│   ├── edit.ejs
│
├── public/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
nodemon index.js
```

or

```bash
node index.js
```

---

## Required Packages

```bash
npm install express
npm install ejs
npm install mysql2
npm install method-override
npm install uuid
npm install @faker-js/faker
```

---

## Database

Create a MySQL database and a `user` table.

Example schema:

```sql
CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);
```

Update your MySQL credentials in `index.js`:

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "your_database"
```

---

## CRUD Routes

| Method | Route             | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/`               | Home page      |
| GET    | `/users/:id/edit` | Edit user page |
| PATCH  | `/users/:id`      | Update user    |
| DELETE | `/users/:id`      | Delete user    |

---

## Concepts Practiced

* Express Routing
* RESTful APIs
* GET, POST, PATCH, DELETE methods
* Method Override
* EJS Templating
* Form Handling
* MySQL Queries
* CRUD Operations
* Dynamic Routing
* Express Middleware

---

## Future Improvements

* User Authentication
* Password Hashing
* Input Validation
* Flash Messages
* Responsive UI
* Search and Pagination
* User Creation Form

---

## Author

**Disha Yadav**

Built while learning Backend Development with Node.js, Express, and MySQL.
