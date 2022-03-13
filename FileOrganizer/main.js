//Entry point of my command line
let helpFunc=require("./commands/help");
// console.log(helpFunc.ghoda());

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
let path = inputArr[1];

switch(command){    //organize
    case "tree":
        //call tree function
        console.log("tree function called and executed successfully on path " + path);
        break;

    case "organize":
        //call organize function
        console.log("organize function called and executed successfully on path " + path);
        break;

    case "help":
        //call help function
        helpFunc.help();
        //help function called and executed successfully
        break;

    default:
        console.log("command not recognized :/");
        break;
         
}
