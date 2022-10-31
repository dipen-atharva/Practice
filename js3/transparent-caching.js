// function slow(x) {
//     console.log(`${x}`);
//     return x;
// }

let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      // scary CPU-heavy task here
      console.log("Called with " + x);
      return x * this.someMethod(); 
    }
  };

function caching(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this,x);
        cache.set(x, result);
        return result;
    };
}

console.log( worker.slow(1) );

worker.slow = caching(worker.slow);

console.log( worker.slow(2) );

// slow = caching(slow);
// console.log(slow(1));
// console.log("Again " + slow(1));
// console.log(slow(2));
// console.log("Again " + slow(2));
