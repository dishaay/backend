# Express.js + EJS Notes

## 1. What is Templating?

Templating is the process of creating dynamic HTML pages using data from the server.

Instead of creating multiple HTML files, we create one template and pass different data to it.

Example:

```js
res.render("profile.ejs", {
    username: "Disha"
});
```

Output:

```
Welcome Disha
```

---

# 2. What is EJS?

EJS stands for **Embedded JavaScript**.

It allows us to write JavaScript inside HTML.

Extension:

```
.ejs
```

Install:

```bash
npm install ejs
```

Enable EJS:

```js
app.set("view engine", "ejs");
```

---

# 3. Views Directory

Express automatically looks for EJS files inside the **views** folder.

Project Structure:

```
Project
│
├── app.js
├── data.json
├── package.json
│
└── views
    ├── home.ejs
    ├── instagram.ejs
    └── profile.ejs
```

If your views folder is elsewhere:

```js
const path = require("path");

app.set("views", path.join(__dirname, "views"));
```

---

# 4. Rendering an EJS File

```js
app.get("/", (req, res) => {
    res.render("home.ejs");
});
```

---

# 5. Interpolation Syntax

Display a variable:

```ejs
<h1>Hello <%= username %></h1>
```

If

```js
username = "Disha";
```

Output:

```
Hello Disha
```

---

# 6. Passing Data to EJS

Server:

```js
app.get("/", (req, res) => {

    const username = "Disha";

    res.render("home.ejs", {
        username
    });

});
```

EJS:

```ejs
<h1><%= username %></h1>
```

---

# 7. Instagram EJS Example

data.json

```json
{
    "disha": {
        "name": "Disha",
        "followers": 500,
        "following": 200,
        "posts": [
            {
                "image": "https://picsum.photos/200",
                "likes": 120,
                "comments": 30
            }
        ]
    }
}
```

Server:

```js
const instaData = require("./data.json");

app.get("/user/:username", (req, res) => {

    const { username } = req.params;

    const data = instaData[username];

    res.render("instagram.ejs", {
        data
    });

});
```

EJS:

```ejs
<h1><%= data.name %></h1>

<p>Followers : <%= data.followers %></p>

<p>Following : <%= data.following %></p>
```

---

# 8. Conditional Statements

If Statement

```ejs
<% if(data.followers > 100){ %>

<h2>Popular User</h2>

<% } %>
```

If Else

```ejs
<% if(data.followers > 100){ %>

<h2>Popular User</h2>

<% } else { %>

<h2>New User</h2>

<% } %>
```

---

# 9. Loops

For...of Loop

```ejs
<% for(let post of data.posts){ %>

<img src="<%= post.image %>">

<p>
Likes : <%= post.likes %>
</p>

<p>
Comments : <%= post.comments %>
</p>

<% } %>
```

For Loop

```ejs
<% for(let i = 0; i < 5; i++){ %>

<h2>Hello</h2>

<% } %>
```

forEach Loop

```ejs
<% names.forEach(function(name){ %>

<h2><%= name %></h2>

<% }) %>
```

---

# 10. EJS Tags

Execute JavaScript

```ejs
<% %>
```

Example

```ejs
<% if(true){ %>

<% } %>
```

Display Data

```ejs
<%= %>
```

Example

```ejs
<%= username %>
```

Render Raw HTML

```ejs
<%- %>
```

Example

```ejs
<%- "<h1>Hello</h1>" %>
```

---

# 11. Route Parameters

```js
app.get("/user/:username", (req, res) => {

    const { username } = req.params;

    res.send(username);

});
```

URL

```
localhost:3000/user/disha
```

Output

```
disha
```

---

# 12. Common Errors

### Error 1

```
Cannot read properties of undefined
```

Reason:

Data was not passed to EJS.

Wrong

```js
res.render("page.ejs");
```

Correct

```js
res.render("page.ejs", {
    data
});
```

---

### Error 2

Wrong Route Parameter

Wrong

```js
app.get("/user/:uname")
```

```js
const { username } = req.params;
```

Correct

```js
const { uname } = req.params;
```

---

### Error 3

Wrong Loop Syntax

Wrong

```ejs
<%= for(let post of posts){ %>
```

Correct

```ejs
<% for(let post of posts){ %>
```

---

### Error 4

Wrong Closing Tag

Wrong

```ejs
<%= } %>
```

Correct

```ejs
<% } %>
```

---

### Error 5

Views Folder Not Found

Wrong

```
home.ejs
```

outside

```
views/
```

Correct

```
views/
    home.ejs
```

---

# 13. Folder Structure

```
Project
│
├── node_modules
├── views
│   ├── home.ejs
│   ├── instagram.ejs
│   ├── profile.ejs
│   └── rolldice.ejs
│
├── data.json
├── app.js
├── package.json
└── package-lock.json
```

---

# 14. Interview Questions

## What is EJS?

EJS (Embedded JavaScript) is a templating engine used to create dynamic web pages by embedding JavaScript inside HTML.

---

## Why use EJS?

- Creates dynamic web pages
- Reduces duplicate HTML
- Reuses templates
- Displays server-side data

---

## What does res.render() do?

It renders an EJS template and sends the generated HTML to the browser.

---

## Difference between res.send() and res.render()

| res.send() | res.render() |
|------------|--------------|
| Sends data directly | Renders an EJS template |
| Can send HTML, JSON, text | Sends rendered HTML |
| Doesn't require EJS | Requires EJS |

---

## Difference between <% %> and <%= %>

| <% %> | <%= %> |
|--------|---------|
| Executes JavaScript | Displays a value |
| Used for loops and if statements | Used for variables |

---

# 15. Quick Revision

- EJS = Embedded JavaScript
- Install using `npm install ejs`
- Enable using `app.set("view engine","ejs")`
- Store EJS files inside `views`
- Render pages using `res.render()`
- Pass data using `res.render("page",{data})`
- Use `<% %>` for JavaScript logic
- Use `<%= %>` to print values
- Use `<%- %>` to render HTML
- Use `req.params` for route parameters
- Match route parameter names exactly
- Use loops and conditions to create dynamic pages
