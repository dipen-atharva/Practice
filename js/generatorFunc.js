function* rangeIterator(start = 0 , end = 50 , step = 1) {
    let iterationCount = 0 ;
    for (let i = start; i < end; i+=step) {
        iterationCount++ ; 
        yield i ;
    }
   
    return iterationCount;
}

const obj = rangeIterator();
for(let value of obj){
    console.log(value)
}