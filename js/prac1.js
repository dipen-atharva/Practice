// Array literals
const car = ["BMW" ,  ,"jaguar" , ,];
console.log(car);


// let cant be declared again
// let x=5;
// let x=6;

// canbe redeclared in another block 
let x=8;
{let x= 5;
console.log(x)}
console.log(x);

// const
const bike = ['abc' , 'xyz'];
console.log(bike);
bike[0] = 'Suzuki';
bike.push('Kawasaki');
console.log(bike);

// multiply funct
let z = myfunc(2,3);
function myfunc(a,b){
    return a * b;
};
console.log(z)
