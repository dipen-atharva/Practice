let user = {
    name : "john" ,
    age : 20,
}
// user.__proto__ = "Hello" ;

let key = "name";
// console.log(user[key]);
// console.log(user.name);
// console.log("age" in user)
// console.log(user.__proto__);


for (key in user) {
    // console.log(key + ":" + user[key]);
}

let clone = {} ; 
for (let key in user) {
    clone[key] = user[key];
}
clone.name =  "harry potter" ; 
console.log(clone.name)
// console.log(clone[key]);
console.log(user.name);



let clone1 = Object.assign({}, user);
console.log(clone1);
