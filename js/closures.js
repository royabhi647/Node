//Functions along with its lexical scope forms a closure.

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();      //10


// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var z=outer();
// console.log(z+"");
// z();

function outer(){
    var a=7;
    function inner(){
        console.log(a);
    }
    a=10;
    return inner;
}
var c=outer();
console.log(c);
c();



const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];
//left to right in a line and top to bottom in a file 
console.log(colorConfig.colors[1]);