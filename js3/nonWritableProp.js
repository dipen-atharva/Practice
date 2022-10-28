let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: true
  });
  
  user.name = "Pete";

  console.log(user.name)

// ********************************************************************************************
let user2 = {} ;

Object.defineProperty(user2 , "name" , {
    value : "Dipen",
    writable: true
})
user2.name = "Pen"
console.log(user2.name)