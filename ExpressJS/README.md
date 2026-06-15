# Module 34: Express.js Notes

## What is a Library?

A library is a collection of pre-written code that can be used whenever needed.

Example:

* Express.js
* React
* Lodash

The developer decides when and where to use the library functions.

---

## What is a Framework?

A framework provides a structure for the application and guides how the code should be organized.

Example:

* Express.js
* Angular

A framework defines the overall flow of the application, while allowing developers to fill in the implementation details.

---

# Express.js

Express.js is a Node.js framework used for building web applications and APIs.

## What does Express do?

1. Listens for incoming requests.
2. Parses HTTP requests.
3. Matches requests with routes.
4. Sends the appropriate response back to the client.

---

# Creating a Node Project

## Initialize a Node Application

```bash
npm init
```

This creates a `package.json` file.

---

## Install Express

```bash
npm install express
```

This installs Express and adds it to the project's dependencies.

---

# Basic Express Server

```javascript
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running");
});
```

---

# app.use()

`app.use()` is used to register middleware.

```javascript
app.use((req, res, next) => {
    console.log("Request received");
    next();
});
```

### Important Objects

* `req` → Request object
* `res` → Response object

HTTP requests are text-based. Express parses them and makes them available as JavaScript objects.

---

# Sending Responses

## res.send()

Used to send a response to the client.

### String Response

```javascript
res.send("Hello World");
```

### HTML Response

```javascript
res.send("<h1>Hello World</h1>");
```

### JSON/Object Response

```javascript
res.send({
    name: "Apple",
    color: "Red"
});
```

### Array Response

```javascript
res.send(["Apple", "Mango", "Banana"]);
```

---

# Routing

A route is a path on a website.

Examples:

```text
/          -> Home Page
/about     -> About Page
/contact   -> Contact Page
```

### Creating a Route

```javascript
app.get("/about", (req, res) => {
    res.send("About Page");
});
```

---

# Handling Invalid Routes (404)

If a user visits a route that does not exist, we send a 404 response.

```javascript
app.get("/*splat", (req, res) => {
    res.status(404).send("Invalid Path");
});
```

Alternatively:

```javascript
app.use((req, res) => {
    res.status(404).send("Invalid Path");
});
```

---

# Nodemon

Nodemon automatically restarts the server whenever code changes are saved.

Install:

```bash
npm install -g nodemon
```

Run:

```bash
nodemon app.js
```

---

# Route Parameters

Route parameters allow us to capture dynamic values from the URL.

Example URL:

```text
https://www.instagram.com/disha
```

Here:

```text
disha
```

is the route parameter.

### Defining Route Parameters

```javascript
app.get("/:username", (req, res) => {
    res.send("Profile Page");
});
```

### Accessing Route Parameters

```javascript
let { username } = req.params;
```

Example:

```text
URL: /disha
```

Output:

```javascript
{
    username: "disha"
}
```

---

# Query Strings

Query strings are used to send additional information through the URL.

Example:

```text
/search?q=apple
```

Here:

```text
q=apple
```

is the query string.

### Accessing Query Strings

```javascript
let { q } = req.query;
```

Example:

```javascript
app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`Searching for ${q}`);
});
```

Visiting:

```text
/search?q=apple
```

Output:

```text
Searching for apple
```

---

# Summary

* Express.js is a framework used to build web applications and APIs.
* `npm init` initializes a Node project.
* `npm install express` installs Express.
* `app.use()` is used for middleware.
* `req` stores request information.
* `res` sends responses.
* `res.send()` can send strings, HTML, arrays, and JSON objects.
* Routes define different paths in a website.
* `res.status(404)` is used for invalid routes.
* Nodemon automatically restarts the server.
* Route parameters are accessed using `req.params`.
* Query strings are accessed using `req.query`.
