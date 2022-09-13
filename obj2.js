/*
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log(this.step);
        return this;
    }
  };

ladder.up().up().down().showStep().down().showStep();
*/

function Calculator(){
    this.read = function(){
        this.a = 2 ;
        this.b = 3 ;
    };

    this.sum =function(){
        return this.a + this.b ;
    };

    this.mul = function(){
        return this.a * this.b ;
    };
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );