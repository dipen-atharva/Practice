// NON-Enumerable

// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };

// Object.defineProperty( user , "toString" ,{
//     enumerable : false
// }) 

// for (let key in user) console.log(key); 
// console.log(Object.keys(user));

// NON Configurable -------------------------------------------------------

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Object.defineProperty(Math, "PI", { writable: true }); // IT WILL NOT WORK
console.log(JSON.stringify(descriptor, null, 2));

// NOTE :- Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

// Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

// let user = {
//     name: "John"
// };

// Object.defineProperty(user, "name", {
//     configurable: false
// });

// user.name = "Pete"; // works fine
// delete user.name; // Error

let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });