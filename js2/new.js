
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3


// function getFunc() {
//     let value = "test";
  
//     let func = new Function('alert(value)');
  
//     return func;
//   }
  
//   getFunc()(); // error: value is not defined

function getFunc() {
let value = "test";
  
let func = function() { alert(value); };
  
return func;
}
  
getFunc()(); // "test", from the Lexical Environment of getFunc