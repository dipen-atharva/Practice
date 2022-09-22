let input = {
  classA: [1, 2, 3],
  classB :[4, 5, 6]
}

let output = {};

// output[Object.values(input)[0][0]] = Object.keys(input)[0] ;

// Object.keys(input).forEach(key => {
  for (const key in input) {
    console.log(key);
    Object.values(input).forEach(val => {
      
      val.forEach(char => {
        output[char] = key;
console.log(output);

      });
    });
  }
// });
console.log(output);
