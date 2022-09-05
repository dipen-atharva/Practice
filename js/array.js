const cars = ["honda" , "hyundai" , "maruti"];
console.log(cars);

let car  = cars[2];
console.log(car);
cars[2] = "BMW";
cars.sort();
console.log(cars);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
myBoys.forEach((name) => console.log("for each " + name));

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


