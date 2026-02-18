// let n=5; 

// for(let i=0;i<n;i++){
//   console.log("hello disha");
// }

//UNDERSTANDING PROCESS.ARGV: RETURNS AN ARRAY , BASICALLY CAN TAKE ARGUMENTS FROM OUR USER, JUST LIKE PROMPT IN WINDOW OBJECT. 
let args= process.argv; 

for(let i=2;i<args.length;i++){
  console.log("hello to ", args[i]);
}

//MODULE.EXPORTS: IS USED TO SEND INFORMATION FROM OUR CURRENT FILE TO DIFFERENT FILES. IT IS CONSIDERED AS AN SPECIAL OBJECT. 
//REQUIRE: A BUILT-IN FUNCTION TO INCLUDE EXTERNAL MODULES FROM SEPRATE FILES. 

let math= require("./math");
console.log(math);
console.log(math.divide(2,2)); 

//getting a directory. 

let fruits= require("./fruits"); 
console.log(fruits);

console.log(fruits[0].color);

//getting a package.
let figlet=require("./figlet");
console.log(figlet);

//importing from my math.js, the values of disha and bhoomi. 

import { disha,bhoomi } from "./math.js";

console.log(disha);

import { generate, count } from "random-words";
console.log(generate());