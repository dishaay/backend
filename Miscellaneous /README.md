# Express.js Notes - GET & POST Requests + OOP Concepts

## 1. Difference between GET and POST Requests

### GET Request

A **GET request** is used to **send information to the server** and **receive information back**.

* Data is sent through the **URL** using **query strings**.
* Mostly used for fetching data.
* Not suitable for sending sensitive information because the data is visible in the URL.

Example:

```js
app.get("/register", (req, res) => {

    let { username } = req.query;

    res.send(`Welcome ${username}`);

});
```

URL:

```
http://localhost:3000/register?username=disha
```

Here,

```js
req.query
```

contains

```js
{
    username: "disha"
}
```

---

### POST Request

A **POST request** is mainly used to **send data to the server** so that the server can create, update, or modify data in the database.

Unlike GET requests, POST requests send their data inside the **request body**, not the URL.

This makes POST requests much more suitable for sending sensitive information like passwords.

Example:

```js
app.post("/register", (req, res) => {

    let { username } = req.body;

    res.send(`Welcome ${username}`);

});
```

Here,

```js
req.body
```

contains all the form data sent by the client.

---

## GET vs POST

| GET                                   | POST                             |
| ------------------------------------- | -------------------------------- |
| Used to fetch data                    | Used to create/update data       |
| Data is sent in URL                   | Data is sent in request body     |
| Uses `req.query`                      | Uses `req.body`                  |
| Data is visible                       | Data is not shown in the URL     |
| Less secure for sensitive information | Better for sensitive information |

---

## Query Strings

A query string is the part of the URL after the `?`.

Example:

```
/register?username=disha&age=20
```

Here,

```js
req.query
```

becomes

```js
{
    username: "disha",
    age: "20"
}
```

---

# Rule to Remember

When destructuring an object, the variable name **must match the property name**.

Correct:

If your HTML form contains

```html
<input name="username">
```

then

```js
let { username } = req.body;
```

works.

Wrong:

```js
let { user } = req.body;
```

because there is no property called `user`.

If you really want to use a different variable name, you can rename it while destructuring:

```js
let { username: user } = req.body;
```

Now,

```
username
```

from the object is stored inside the variable

```
user
```

---

# HTML Forms

Always specify the correct **action** and **method** inside a form.

Example:

```html
<form action="/register" method="POST">

    <input type="text" name="username">

</form>
```

The browser automatically sends the request to

```
/register
```

using the POST method.

While learning on localhost, we usually write

```
http://localhost:3000/register
```

When deployed, the application generally uses the **HTTPS protocol** for secure communication.

---

# Why is req.body Undefined?

If you try

```js
console.log(req.body);
```

you may get

```
undefined
```

This happens because Express **cannot read incoming POST data by default**.

We need middleware to parse the request body.

Add:

```js
app.use(express.urlencoded({ extended: true }));
```

This parses form data.

If the client sends JSON data, also add

```js
app.use(express.json());
```

---

# Understanding the Middleware

```js
app.use(express.urlencoded({ extended: true }));
```

### app.use()

Applies the middleware to every incoming request.

---

### express.urlencoded()

Reads URL-encoded form data sent from HTML forms.

---

### extended: true

Allows Express to parse nested objects and more complex data structures.

Example:

```js
user[name] = "Disha"
```

can be converted into

```js
{
    user: {
        name: "Disha"
    }
}
```

---

# Object-Oriented Programming (OOP) in JavaScript

---

## 1. Object Prototype

Every JavaScript object has an internal **prototype**.

A prototype is another object from which the current object inherits properties and methods.

Example:

```js
let arr = [1, 2, 3];
```

If you inspect the array, you'll notice methods like

```
push()
pop()
map()
filter()
```

These methods are **not stored inside every array individually**.

Instead, they come from

```
Array.prototype
```

This saves memory because all arrays share the same methods.

Without prototypes:

```
Array 1
 └── push()

Array 2
 └── push()

Array 3
 └── push()
```

Every array would have its own copy.

With prototypes:

```
Array.prototype
      │
      ├── push()
      ├── pop()
      ├── map()

      ▲
      │
Array 1
Array 2
Array 3
```

All arrays use the same methods.

---

## 2. Factory Functions

A factory function is simply a function that returns an object.

Example:

```js
function createUser(name, age){

    return{
        name,
        age
    };

}

const user1 = createUser("Disha", 20);
```

Each function call creates and returns a new object.

---

## 3. Constructor Functions

Constructor functions are used along with the `new` keyword to create objects.

Example:

```js
function User(name, age){

    this.name = name;
    this.age = age;

}

const user1 = new User("Disha", 20);
```

---

## 4. The new Operator

When we use

```js
new User()
```

JavaScript automatically:

1. Creates an empty object.
2. Sets the object's prototype.
3. Binds `this` to the new object.
4. Executes the constructor function.
5. Returns the newly created object.

---

## 5. Classes

Classes provide a cleaner syntax for creating objects.

Example:

```js
class User{

    constructor(name, age){

        this.name = name;
        this.age = age;

    }

}

const user1 = new User("Disha", 20);
```

Classes internally work using prototypes.

---

## 6. Constructors

A constructor is a special method inside a class that runs automatically whenever a new object is created.

Example:

```js
class Student{

    constructor(name){

        this.name = name;

    }

}
```

---

## 7. Inheritance

Inheritance allows one class to reuse the properties and methods of another class.

Example:

```js
class Animal{

    eat(){

        console.log("Eating");

    }

}

class Dog extends Animal{

    bark(){

        console.log("Barking");

    }

}

const dog = new Dog();

dog.eat();
dog.bark();
```

Here,

`Dog` inherits the `eat()` method from `Animal`.

---

# Quick Revision

* GET requests use `req.query`.
* POST requests use `req.body`.
* GET data is visible in the URL.
* POST data is sent inside the request body.
* Use `express.urlencoded()` to parse HTML form data.
* Use `express.json()` to parse JSON data.
* `app.use()` applies middleware to every request.
* Destructured variable names must match the property names.
* Every JavaScript object has a prototype.
* Prototypes allow objects to share methods and save memory.
* Factory functions return objects.
* Constructor functions work with the `new` keyword.
* Classes are syntactic sugar over constructor functions and prototypes.
* Constructors initialize newly created objects.
* Inheritance allows one class to reuse another class's methods.
