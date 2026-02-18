const sum =(a,b) => a+b; 
const mul =(a,b) => a*b; 
const divide =(a,b) => a/b; 

module.exports= 123; //WHATEVER INFORMATION I GIVE TO MY MODULE.EXPORTS, IT WILL BASICALLY EXPORT THAT INFORMATION OUTRIGHT.

//2nd way.
let obj= {
  add:sum, 
  mul:mul,
  divide:divide
}; //I HAVE STORED ALL OF MY FUNCTIONS IN MY OBJ

module.exports=obj;

//3rd way. 

module.exports={
  add:sum, 
  mul:mul,
  divide:divide
};//MODULE.EXPORTS KO HI EQUAL KAR DIA YAHA. 

//4th way. 
module.exports.sum =(a,b) => a+b; 
module.exports.mul =(a,b) => a*b; 
module.exports.divide =(a,b) => a/b; 

//5th way of using import and export. 

export const disha="yadav"; 
export const bhoomi="yadav"; 
