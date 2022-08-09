// fs->File system module
const fs=require("fs");
console.log(fs);

// append data in file

let res=fs.appendFileSync("f1.txt","Hello i am f1 file");
fs.appendFileSync("f1.txt","\nYou guys are smart");
console.log(res);

// read data from file

let data=fs.readFileSync("f1.txt");
console.log(data);

console.log(data+"");

// let data=fs.readFileSync("f1.txt","utf8");
// console.log(data);
//new change and more 
