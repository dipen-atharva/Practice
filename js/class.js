const bigday = new Date(2015,6,19);
console.log(bigday.toLocaleString());
if (bigday.getTime() < Date.now() ) {
    console.log("Once upon a time")
    
}

function myClass() {
    this.myField = "foo";   
}

myClass.myStaticField = "bar";
myClass.myStaticMethod = function () {
    console.log("myStaticMethod")
};

myClass.prototype.myMethod = function (){
    console.log("prototype method")
}
// constructing a class 
const myInstance = new myClass ; 
console.log(myInstance.myField);
myInstance.myMethod();


// class Color {
//     constructor(r,g,b){
//         this.values = [r,g,b];
//     }
//     // getRed(){
//     //     return this.values[0];
//     // }
// }
// const red  = new Color(255,0,0);
// red.values[0]=0;    
// console.log(red);
// // console.log(red.getRed());

// static properties
 class myColor {
    static isvalid(r,g,b){
        return r >= r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    }

 }
 var valid = myColor.isvalid(255,40,0);
 console.log(valid)