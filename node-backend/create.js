const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'files');
// console.log(dirname); // F:\fjp5\node-backend\files

// create file inside folder

/* for(i = 0; i < 5; i++){
    fs.writeFileSync(dirname+"/hello"+i+".txt","a simple txt file")
} */


// get all  file name from folder in an array

/* fs.readdir(dirname,(err,files)=>{
    console.log(files);
}) */


// get  one by one file name from folder

fs.readdir(dirname,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})