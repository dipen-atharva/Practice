// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// // set fullName is executed with the given value.
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper


let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; 