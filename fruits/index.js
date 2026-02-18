//this index.js file is my entry point which will combine all the information from our present directory and then export it. 

//so now i am going to combine the files present in my directory. 

let apple = require("./apple");
let banana = require("./banana");
let mango = require("./mango");

let fruits= [apple, mango, banana]; 

module.exports=fruits;