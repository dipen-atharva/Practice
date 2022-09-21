function pow(x, n) {
    let result = x ;
    for (let i = 1; i < n ; i++) {
        result *= x ;     
    }
    return result ;

}
// console.log(pow(2,3));

function showPrime(n) {
    nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime ; 
        }
        console.log(i);
    }   
}
showPrime(9);
