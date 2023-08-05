let age=prompt("wnter your age") 
  age=Number.parseInt(age)
if(age>150){
  throw new Error("gadbad ho gyi behnchod") 
}
else{
  console.log("still runingg")
}
try{
  // harry
  throw new referenceerror("harry")
}
catch(error){
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}
