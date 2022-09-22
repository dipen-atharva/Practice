// let input ={
//     classA : [1,2,3],
//     classB : [4,5,6]
// }

// let output = Object.fromEntries(
//     Object.entries(input).map(([key, value]) => [[value], key])
// );

// console.log(output);
let output ={
  "1,2,3": "classA",
  "4,5,6": "classB"
}

let result = [] ;
for (let i = 0; i < Object.keys(output).length; i++) {
  for (let j = 0 ; j <= Object.keys(output)[0].length; j++) {
		if (j % 2 == 0) {
			result.push(Object.keys(output)[i][j] + " => " + Object.values(output)[i]); 
		}
  }
}
console.log(`{${result}}`);