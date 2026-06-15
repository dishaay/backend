//this will act like my server here. 

const express= require ('express')
const app= express ()
app.listen(3000,()=>{
  console.log("working fine!")
})

app.get('/',(req,res)=>{
  res.send("you have contacted the root site")
})


  // app.get("/:username", (req,res)=>
  // {
  //   res.send("hi i am sending something bro")
  //   console.log(req.params)
  //   let {username} = req.params; 
  //   console.log(`welcome to the page of @${username}`)
  // })


//query strings 

app.get('/search', (req,res)=>{
  console.log(req.query) //saari queries jo req ke saath aati hai print ho jaayegi 
  res.send("no results")
})

app.get('/idk',(req,res)=>{
  let {q}= req.query 
  res.send(`these are the search results for ${q}`)

  if(!q){
    console.log("nothing searched here")
  }
})

app.get("/*splat",(req,res)=>{
  res.status(404).send("this path does not exist") //this is for an invalid site
})