let user = {
    name: "John",
    age: 30,
};

let prices = {
  banana: 10,
  orange: 20,
  manngo: 20
}

console.log(user.name);
// console.log(user.keys()); //keys not defined
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// It will run in browser 
// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(entry => [entry[0],entry[1] * 2])
// )
// console.log(doublePrices);
// console.log(doublePrices.banana);


function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(prices));
