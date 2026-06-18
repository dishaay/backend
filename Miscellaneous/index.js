const express = require('express')

const app= express()
const port= 3000

app.use(express.urlencoded({extended: true})) 


app.listen(port,()=>{
  console.log(`listening to ${port} `)
})


app.get("/register", (req,res)=>{
  let {username, password}= req.query
  res.send(`welcome user ${username}`); 
})

app.post("/register", (req,res)=>{
  console.log(req.body)
  let {username , password } = req.body 
  res.send(`welcome ${username} and i know your password whcih is ${password}`); 
})