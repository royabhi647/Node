// Getting input from command line

// console.log(process.argv);

/* PS F:\fjp5\node-backend> node input.js hello, hy
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\fjp5\\node-backend\\input.js',
  'hello',
  'hy'
] */

// console.log(process.argv[3]);  // hy


// create file using command line and write some dummy data in file
// -> node input.js apple.txt 'This is fruit'

const fs = require('fs');

/* const input = process.argv;
fs.writeFileSync(input[2],input[3]); */


// create, delete file
// node input.js add data.txt 'this is color and fruit'
// node input.js remove data.txt
const input = process.argv;

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log('Invalid Input');
}