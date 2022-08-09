const fs=require('fs');
console.log("before");

// //synchronous working
// let data=fs.readFileSync("f11.txt");
// console.log(data+"");

// //asynchronous working
// fs.readFile("f11.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log(data+"");
//     }
// }

//promises working
let promiseThatFileWillBeRead=fs.promises.readFile("f11.txt");
console.log(promiseThatFileWillBeRead);


promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.then(printError);
console.log("After");

function printData(data){
    console.log("promise is fullfilled");
    console.log(data+"");
}

function printError(err){
    console.log((err));
}