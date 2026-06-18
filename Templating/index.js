const express= require('express')
const app = express()

const path= require('path')
app.listen(3000, ()=>{
  console.log("working")
})

app.set("views" ,path.join(__dirname,"/views"))

app.set("view engine", "ejs");  //ejs achee se ab mere templates ko render kar dega yaha

  app.get("/",(req,res)=>{
    res.render("home.ejs")
  })

  app.get("/roll", (req,res)=>{
    res.render("rolldice.ejs")
  })

  app.get("/ig/:username", (req,res)=>{
    const {username}= req.params 
    const names = ["samhita", "disha", "bhoomi"]
    res.render("instagram.ejs",{username , names})
  })

  // INSTAGRAM WITH EJS !. 
  app.use(express.static(path.join(__dirname,"public"))) // js will always find my public folder for my static files! 
  app.get("/eyeg/:uname", (req,res)=>{
    const instaD= require ("./data.json");
    let {uname}= req.params
    console.log(instaD)
    const data= instaD[uname]; 
    console.log(data) 

    if(data){
     res.render("instagram1.ejs", {data})
    }
    else{
      res.render("error.ejs")
    }
  })