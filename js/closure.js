function init() {
    var name = "Mozilla";
    function isName(params) {
        console.log(name);
    }
    return isName();
}
init();

if(Math.random < 0.5){
    var x = 1;
}else{
    var x = 2;
}
console.log(x)


function makeAdder(x) {
    return function(y){
        return x+y;
    };
}

const add5 = makeAdder(5);
console.log(add5(20))
