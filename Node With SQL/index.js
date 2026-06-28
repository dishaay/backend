import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from "express"
import { faker } from "@faker-js/faker";

const app= express()
app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
import methodOverride from "method-override";
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}))
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Disha@108",
  database: "app",
});

let q = "INSERT INTO user(id, username, email,password) VALUES ?";

let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


app.get("/", (req, res) => {
    let q1 = "SELECT COUNT(*) AS total FROM user";

    connection.query(q1, (err, results) => {
        if (err) {
          throw err
        };
        let qq1= results[0].total;
         res.render("home.ejs",{qq1})
    });

});

//show route 

app.get("/user",(req,res)=>{
  let q1= "SELECT * FROM user"
    connection.query(q1, (err, users) => {
        if (err) {
          throw err
        };
        // console.log(results)
        res.render("show.ejs",{users})

    });

})

app.get('/user/:id',(req,res)=>{
  let {id}=req.params
  let q=`SELECT * FROM user WHERE id='${id}'`;
  
      connection.query(q, (err, results) => {
        let user=results[0]
        if (err) {
          throw err
        };
        console.log(results)
        res.render("edit.ejs",{user})

    });
})

//UPDATE ROUTE 

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params
  let {password:formPassword, username: newUsername} = req.body
  let q=`SELECT * FROM user WHERE id='${id}'`;
  
      connection.query(q, (err, results) => {
        if (err) {
          throw err
        };
        let user=results[0]
        if(formPassword!= user.password){
          res.send("wrong password")
        }
        else{
          let q2= `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
          connection.query(q2,(err,result=>{
            if(err) throw err;
            res.redirect("/user")
          }))
        }

        // res.send(user)
        console.log(results)
    });
})

app.listen(3000,()=>{
  console.log("server is working")
})




// to enter the data of my 100 users in my array
// // let data= [];

// for(let i=0;i<100;i++){ //100 fake users
// data.push(getRandomUser());
// }