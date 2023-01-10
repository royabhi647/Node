/*const obj = new Object({
    name: "Ajay"
})

const obj = new obj();

const obj = {
    name: "Ajay Suneja"
}*/


/* prototype in javaScript*/

/*const obj = {
    name: "Ajay Suneja"
}
console.log(obj);

const obj2 = {
    roll: 1,
    __proto__:obj
}
console.log(obj2);   // roll:1  name: "Ajay Suneja"
*/

/*const obj = {
    name: "Ajay Suneja",
    getName: function(){
        return this.name
    },
    getRoll: function(){
        return this.roll;
    }
}
console.log(obj);

const obj2 = {
    roll: 1,
    name: "Vivek",
    __proto__:obj
}
console.log(obj2.getName());  // Vivek

const obj3 = {
    class: "MCA",
    __proto__:obj2,
}
console.log(obj3.getRoll());  // 1
*/

const obj = {
    name: "Ajay Suneja",
    getName: function(){
        return this.name
    },
    getRoll: function(){
        return this.roll;
    }
}
// console.log(obj);

const obj2 = {
    roll: 1,
    name: "Vivek",
    __proto__:obj
}
// console.log(obj2.getRoll())

const obj3 = {
    class: "MCA",
    __proto__:obj2
}
// console.log(obj3.getName());

const array1 = ["Ajay"];
console.log(array1);

const object = new Object();
console.log(object);

const array = new Array();
console.log(array);

Array.prototype.show=function(){
    return this;
}
const cities = ["Delhi"];
console.log(cities.show());

Array.prototype.convertIntoObject=function(){
    let newObj={};
    this.forEach(element=>{
        newObj[element]=element;
    })
    return newObj;
}
console.log(cities.convertIntoObject());  // {Delhi: 'Delhi'}


function MyPrototype(name,roll){
    this.name=name;
    this.roll=roll;
}

MyPrototype.prototype=obj;

const myproto = new MyPrototype("Priyanka","21");
// console.log(myproto);
console.log(myproto.getName());  // Priyanka
console.log(myproto.getRoll());  // 21
