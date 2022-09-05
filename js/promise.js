function successCallback(result){
    console.log(`Audio file is ready at url ${result}`)
}

function failureCallback(error) {
    console.log(`Error generating audio file ${error}`)
}

// createAudioFileSync(audioSettings).then(successCallback,failureCallback);


// async function foo() {
//     try{
//         const result = await doSomething();
//         const newresult = await doSomethingElse();
//         const finalresult = await doThirdThing();
//     }
//     catch(error){
//         failureCallback(error);
//     }
// }

// timing   
Promise.resolve().then(() => console.log(2));
console.log(1);
// +++++++++++++++++++++++++++++++++++
const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
wait(0).then(() => console.log(4));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));
console.log(1);
    