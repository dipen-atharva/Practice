// nested functions

function addSquares(a,b){
    function square(x){
        return x * x ;
    }
    return square(a) + square(b);
}

const number = addSquares(2,3);
console.log(number);

// closure function

function add(a){
    function add2(b){
        return a + b 
    }
    return add2; 
}

const result = add(2)(3);
console.log(result);