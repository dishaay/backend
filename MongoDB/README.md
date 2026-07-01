# MongoDB + Mongoose Notes

## What is MongoDB?

MongoDB is a **NoSQL database** that stores data in the form of **documents** instead of rows and columns.

---

## SQL vs MongoDB

| SQL | MongoDB |
|------|----------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |

---

## Example Document

```json
{
  "_id": "12345",
  "name": "Disha",
  "age": 21,
  "city": "Mumbai"
}
```

- Each object is called a **Document**.
- A collection contains many documents.

---

## Mongoose

Mongoose is an **ODM (Object Data Modeling)** library for MongoDB.

It allows us to:
- Define schemas
- Validate data
- Create models
- Perform CRUD operations easily

Install:

```bash
npm install mongoose
```

---

## Connecting to MongoDB

```javascript
const mongoose = require("mongoose");

main()
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
```

---

## Schema

A **Schema** is a blueprint that defines the structure of the documents.

Example:

```javascript
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
```

This means every user document should contain:
- name
- age
- email

---

## Model

A **Model** is created using a schema and is used to interact with the database.

```javascript
const User = mongoose.model("User", userSchema);
```

---

## Creating a Document

```javascript
const user1 = new User({
    name: "Disha",
    age: 21,
    email: "disha@gmail.com"
});

user1.save();
```

---

## CRUD Operations

### Create

```javascript
const user = new User({
    name: "Rahul",
    age: 22
});

user.save();
```

---

### Read

```javascript
User.find();
```

```javascript
User.findOne({ name: "Disha" });
```

```javascript
User.findById("id");
```

---

### Update

```javascript
User.updateOne(
    { name: "Disha" },
    { age: 22 }
);
```

```javascript
User.findByIdAndUpdate(id, {
    age: 25
});
```

---

### Delete

```javascript
User.deleteOne({ name: "Rahul" });
```

```javascript
User.findByIdAndDelete(id);
```

---

## Flow of Mongoose

```
MongoDB Database
        │
        ▼
Collection
        │
        ▼
Documents
        ▲
        │
Model
        ▲
        │
Schema
```

---

## Easy Analogy

Database → Library

Collection → Shelf

Document → Book

Field → Information inside the book

Schema → Book template

Model → Librarian who manages the books

---

## Important Commands

Start MongoDB Shell

```bash
mongosh
```

Show databases

```bash
show dbs
```

Use/Create database

```bash
use college
```

Show collections

```bash
show collections
```

Insert one document

```javascript
db.users.insertOne({
    name: "Disha",
    age: 21
});
```

Find all documents

```javascript
db.users.find();
```

Pretty output

```javascript
db.users.find().pretty();
```

Delete one document

```javascript
db.users.deleteOne({
    name: "Disha"
});
```

---

## Key Points

- MongoDB stores **documents**.
- A **collection** is similar to a SQL table.
- A **document** is similar to a SQL row.
- A **field** is similar to a SQL column.
- A **schema** defines the document structure.
- A **model** is used to perform CRUD operations.
- Mongoose acts as a bridge between Node.js and MongoDB.
