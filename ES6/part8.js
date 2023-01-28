// Map, set, WeakSet and WeakMap
// all are object
"use strict";

//set
// -> It contains only unique values
// Object constructor
// we cannot store data in key value pair , we can store single value (it can be integer, array,object string)

let myArray = [1,2,3,4]
let obj = new Set(myArray);
obj.add(5);
obj.add(5);
// console.log(obj);
obj.delete(5);
console.log(obj);
var obj1 = {name:"Ajay"}
obj.add(obj1);
console.log(obj);
// obj.clear();
// console.log(obj);
console.log(obj.has(1))  // check element is present or not

for(let new1 of obj){
    console.log(new1);
}

obj.forEach((element)=>{
    console.log(element);
})



// Map -> store data in the form of key value , update latest value if same key

let myMap = new Map([["a1","Ajay"],["a2","Vikash"]])
myMap.set("a2","ajay")
console.log(myMap.get("a2"))
for(let[key,value] of myMap){
    console.log(`keys ${key} , value ${value}`)
}
myMap.forEach((key,value)=>{
    console.log(key,value)
})

// WeakSet -> we can store only objects , we cannot iterate on WeakSet object (looping not allowed)

let ws = new WeakSet();
var ob1 = {"name":"Tiger"}
var ob2 = {};
ws.add(ob1);
ws.add(ob2);
console.log(ws);
ws.delete(ob1)
console.log(ws.has(ob1))


// WeakMap -> we can store only objects , iteration not allowed

let wm = new WeakMap()
var ob3 = {"name":"Ajay"}
var ob4 = {};
wm.set(ob3,"Private")
wm.set(ob4,"Private data");
console.log(wm);
console.log(wm.has(ob4))