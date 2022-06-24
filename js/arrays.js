// // Array is a collections of elements

// let cars=['BMW',"AUDI","MG",1,2,3,true];
// console.log(cars);

// // accessing the elements of an array
// console.log(cars[0]);
// console.log(cars[3]);

// // replacing elements in array
// cars[3]="Mahindra";
// console.log(cars[3]);

// // Adding elements in an array
// cars[7]="Honda";
// console.log(cars);

// // Mehtods of an array
// // 1.pop method
// cars.pop();
// console.log("after poping the elements\n" +cars);

// // 2.push method
// cars.push("TATA");
// console.log("after pushing an element");
// console.log(cars);

// // 3.Unshift method
// cars.unshift("JLR");
// cars.unshift("Mustang");
// console.log(cars);

// // 4.shift method
// cars.shift();
// cars.shift();
// console.log(cars);

// console.log(cars.length);

// // 2D-Array
// let array2d=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(array2d);
// console.table(array2d);
// console.log(array2d[1][2]);

// 2d-Array
let array2d=[
    ["BMW",2,null,45],
    [4,true,6],
    [7,"8",9],
    [7,"8",9],
]; //array of arrays

//contigious allocation of memory
console.log(array2d);
console.table(array2d);

let res=array2d[1];
console.log("printing of res array");
console.log(res);

console.log("res of 2d index");
console.log(res[2]);      //6

console.log(array2d[1][2]);   //6
console.log(array2d[1][3]);   //undefined

console.log(array2d.length);   //4 rows
console.log(array2d[0].length);  //4 column

//substitute value in 2d array
array2d[1][1]=false;
console.table(array2d);
