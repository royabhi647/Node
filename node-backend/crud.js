// CRUD with File System

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
const filePath = `${dirPath}/apple.txt`;

// create file inside folder
// fs.writeFileSync(filePath,'This is a simple text file');


// read file content

/*fs.readFile(filePath,(err,item)=>{  // print Buffer numeric value (<Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65>)
    console.log(item);
})*/


// convert buffer numberic output to string use 'utf8'

/* fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item); // This is a simple text file
}) */


// add content inside same file

/* fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
    if(!err) console.log('file is updated');
}) */


// Rename file name 

/* fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file name is updated")
}) */


// Delete file 

/* fs.unlinkSync(`${dirPath}/fruit.txt`) */

