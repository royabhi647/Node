// array
[a,b] = ["FJP", 5];
console.log(a);  // FJP
console.log(b);  // 5


[n1, , n3] = [1,2,3];
console.log(n1);
console.log(n3);

// object destructuring
let obj = {
    name : "Abhishek",
    age : 22
}

let {age} = obj;
console.log(age);

