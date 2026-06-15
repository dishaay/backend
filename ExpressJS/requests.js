app.use((req,res)=>{
  console.log("i am getting your request here!") //this is a simple response. 
})

  res.send("this is a basic response") //this is an array response.

  res.send({
    name:"apple",
    color:"red",
  }) // this is an object response to my request. 

app.use((req,res)=>{
    res.send ("<h1>ok hi this is my html response</h1>"); // this is my html response. 
}
)