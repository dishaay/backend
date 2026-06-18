function person (name, age){
  const person = { 
    name: name, 
    age, age,
    talk(){
      console.log(`hi my name is ${this.name}`)
    }
  }

  return person;
}