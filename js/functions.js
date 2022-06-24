// 1.Normal function

function add(a,b){
    console.log(a+b);
}
add(2,6);

function calculator(str,a,b){
    if(str=='add'){
        return function add(){
            console.log(a+b);
        }
    }
}
let returnedfunc=calculator('add',2,3);
console.log("returned function is\n" +returnedfunc);
returnedfunc();

// 2.Function expression

let sayHi=function(){
    console.log("hello guys i am function expression");
}
console.log("line 24\n" +sayHi);
// sayHi();

let sayBye=function(){
    console.log("bye guys");
}
console.log("line 27\n" +sayBye);
// sayBye();

// 3.IIFE(Imidiately scope function expression)

// function add(a,b){
//     return a+b;
// }
// let a=add(2,3);
// console.log(a);


let additionIIFE=(function(a,b){
    console.log(a+b);
})(20,30);