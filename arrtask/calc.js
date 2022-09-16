function Calculator(str) {

    this.methods = {
        "-"  : (a,b) => a-b ,
        "+"  : (a,b) => a+b 
    }
    
    
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") );