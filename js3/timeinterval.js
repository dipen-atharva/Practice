// function hello() {
//     console.log("hello");
// }

// // setTimeout(hello,3000);
// setInterval(hello ,2000);

// let timerId =setInterval(()=> {console.log("tick")},1000)

// setTimeout(()=> {clearInterval(timerId); console.log("stopped");},5000)
 


// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000); 
// }, 2000);


// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);

//   if (start + 100 < Date.now()) console.log(times); 
//   else setTimeout(run); 
// });


let i = 0;

setTimeout(() => console.log(i), 1000); // ?

for(let j = 0; j < 100; j++) {
  i++;
}