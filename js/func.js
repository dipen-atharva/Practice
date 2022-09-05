/*
function myFunc(theObject) {
    theObject.make = 'Honda' ; 
    theObject.model = 'Civic' ; 
}

const car  = {
    make : "Toyota",
    model : "Legender"
}

console.log(car.make  + " " +car.model);
myFunc(car);
console.log(car.make  + " " +car.model);
*/

const fact = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(fact(2));

// *******************************



function map(f ,a) {
    const result  = [] ;
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i])
    }
    return result;
}

const f =function (x){
    return x*x*x ;
}

const numbers = [0,1,2,3,4,5,6];
const cube = map(f,numbers);
console.log(cube)
  

