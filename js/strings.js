// string is a sequence of character
var str="Hello pepcoders";
console.log(str);
console.log(str[4]);

// string in js are immutable
str[4]="z";
console.log(str);
console.log(str.length);

// string methods
// 1.Extraction method
//slice method

var slicedstr=str.slice(6,15);
console.log(slicedstr);
console.log(str);

var slicedstr=str.slice(6);
console.log(slicedstr);

var slicedstr=str.slice(2,-4);
console.log(slicedstr);

// substring method

let ans=str.substr(2,6);
console.log(ans);
console.log(str);

// Replacing
str="YOLO";
console.log(str);

// to lower and upper case
console.log(str.toLocaleLowerCase());
str="fomo";
console.log(str.toUpperCase());
console.log(str);

// concatenation method 

let firstStr="Beleive in ";
let secondStr="yourself";
let concatenatedstr=firstStr+secondStr;
console.log(concatenatedstr);

// concat method
let concatStr=firstStr.concat(secondStr," and me");
console.log(concatStr);

// trim method
let trimstr="         Hello         how are you            ";
console.log(trimstr);
console.log(trimstr.length);

console.log(trimstr.trim());
console.log(trimstr.trim().length);

var str = "Hello hello my name hello is Abhishek"
console.log(str);
// divides string on the basis of argument and puts them in an array
var a=str.split("hello");
console.log(a);
