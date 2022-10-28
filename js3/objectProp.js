// let user = {
//     name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log( JSON.stringify(descriptor, null, 2 ) );

/* output will be 
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );

