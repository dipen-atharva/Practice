let animal = {
    eats: true,
    walk() {
        console.log("Animal Walk");
    },
    run() {
        console.log("This method won't be used by rabbit");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// rabbit.__proto__ = animal;
// console.log(rabbit.eats); // true 
console.log(rabbit.jumps); // true

rabbit.walk();

// Writing does not use prototype
rabbit.run = function () {
    console.log('Rabbit run');
}

rabbit.run();

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`); 
    }
}