let obj={};
console.log(obj);  //empty objects

let person={
    name:"Abhishek",
    age:28,
    phone:8002573948,
    gender:"male",
    height:"170cm"
};

console.log(`Hey ${person.name},thank you for signing up!`);
console.log(person.gender);
console.log(person["gender"]);

let str="Hello";
console.log(str.length);   //dot notation
console.log(str["length"]); //square bracket notation

// Nesting of objects
let captainAmerica={
    firstName:"Steve",
    lastName:"Rogers",
    friends:["Bucky","Tony Stark","Brue Banner"],
    age:102,
    isAvenger:true,
    address:{
        state:"Mahattan",
        city:"new york",
        country:"USA"
    },
    sayHi:function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log("printed using bracket notation "+captainAmerica["friends"][0]);
captainAmerica.sayHi();    //method accessing

// Nested objects
console.log(captainAmerica.address.city);

//for loop
for(let key in captainAmerica){
    console.log(key);

    console.log(captainAmerica[key]);
}
console.log(typeof captainAmerica.friends);

// deleting the key of an Object
delete captainAmerica.lastName;
console.log(captainAmerica.lastName);

let car={
    name:"ferrari",
    model:2022,
    startEngine:function(){
        console.log(`starting the Engine of the car ${this.name}`);
    }
}
car.startEngine();



// methods-> objects ke andar function
// console.log(str.toUpperCase());


let arr = ["a", "b", 1, true];

let arrr = {
    0: "a",
    1: "b",
    2: 1,
    3:true
}
