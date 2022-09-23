let arr = [1, 2, 3];
// same way object can be copied 
// let obj = {a:1,b:2};
// let newObj = {...obj};

let arrCopy = [...arr]; 
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

console.log(arr === arrCopy); // false


arr.push(4);
console.log(arr); 
console.log(arrCopy); 