 
// for (var i=1 ; i < 10 ; i++){
//     console.log(i);
// }


// let j=0 ;
// do {
//     j +=1;
//     console.log(j);
// } while (j < 9);

// let n =0 ;
// let x =0 ;
// while (n < 8) {
//     n++;
//     x += n;
// }
// console.log(x);


//foreach
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    
  txt += value ;
}
console.log(txt);