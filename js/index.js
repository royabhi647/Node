// js start
/*var a;
a=10;
console.log(typeof a);
console.log(a);

a="hello";
console.log(a);
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

var num=10;
console.log(num);

var float=2.4;
console.log(float);

var t=true;
var f=false;
console.log(t);
console.log(f);

var str='a';
console.log(typeof str);

str="How you doing ?\nI am fine .How about you";
console.log(str);

var b=`Hi hope you guys are
able grasp the concept`;
console.log(b);

var num=4500;
console.log(`half of ${num} is ${num/2}`);

// var has some problem
// 1> redeclaration is allowed

var r="hello";
console.log(r);

//var r=100;        //console is not defined as object oriented
//connsole.log(r);

// let leyword
let l=100;
console.log(l);

//let l=200;         // SyntaxError: Identifier 'l' has already been declared

l=300;
console.log(l);

var num=10;
for(var i=1;i<=num;i++){
    if(i%2==0){
        console.log("num is even");
    }
}
*/

// const keyword
const a=2;
console.log(a);

//const a=5;         //SyntaxError: Identifier 'a' has already been declared

//a=4;                 //TypeError: Assignment to constant variable.at Object.<anonymous> (C:\fjp5\java script\index.js:75:2)


let j=20;
for(var i=0;i<Number;i++){
    let j=20;
    if(i%2==0){
        let hello=1000;
        console.log(i);
        console.log(hello);
    }
    console.log("inner" +j);
}
console.log("outer" +j);
console.log(`value of i is ${i}`);

//console.log(hello);     //ReferenceError: hello is not defined at Object.<anonymous> (C:\fjp5\java script\index.js:91:13)




  // {

  //     //this space between opening and closing of curly braces is a block
  // }

  //const keyword
  const a = 2;
  // console.log(a);
  // na hi redeclare na reinitialize
  // const a = 5;
  // a = 4; //TypeError: Assignment to constant variable.
  // console.log("hey");

  let a1 = 10;
  for (var i = 0; i <= 0; i++) {
    console.log(`i=${i}`);
    console.log(a1);
    let a1 = 90;
    console.log(a1);
  } //Sir iss code me error bol raha a1 needs to initialized first. WHY??
