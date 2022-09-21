let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b-a);
// console.log( arr );

// copy and sort 

function copySorted(arr1) {
    return arr1.slice().sort();
}

let arr1 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr1);

console.log( arr1 );
console.log( sorted ); 