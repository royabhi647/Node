// hoisting

//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

// JavaScript only hoists declarations, not initializations.



getName();       // Technical Sunega
console.log(a);   // undefined
var a = 5;
function getName(){
    console.log("Technical Sunega")
}