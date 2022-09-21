// ARRAY DESTRUCTURING

// let arr = ["John", "Smith"]
// let [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname);  // Smith

// let [firstName1, surname2] = "Johny Smith".split(' ');
// console.log(firstName1); // Johny
// console.log(surname2);  // Smith

// let [Name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log([Name, , title] ); //[ 'Julius', <1 empty item>, 'Consul' ]

// let [Name1,title1,...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log([Name,title,...rest] ); //[ 'Julius', 'Consul', 'Consul', 'of the Roman Republic' ]

// let user = {
//     name: "John",
//     age: 30
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// OBJECT DESTRUCTURING

let options = {
  menu: "Menu",
  width: 200
};

let {menu : m , width, height = 100} = options;

console.log(m);  // Menu
console.log(width);  // 100
console.log(height); // 200




