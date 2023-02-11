// shallow and deep copy

/* -> changes in both arr and copyArr because both points to same reference , 
 -> object type of data type that is also called reference data type that stores only one reference 
 -> so we have created copy of original array that points reference and we want to change in array or obj
 -> that actual changes occurs in reference and reflects changes in our array or obj */

/* let arr = [1 , 2, 3, 4]
let copyArr = arr;
copyArr[1] = 4
console.log(arr);
console.log(copyArr); */


// -----------------------------> Shallow Copies<--------------------------------

    // -> reference data type i.e object or array,  can create a copy at 1st level that is called shallow copy

 // Shallow copy using Spread Operator Method (spread operator reference ko change kr dega)

/* let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b:'Tennis'}]

let copySports = [...sports]

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log("Original Sports Array", sports)
console.log("Copy Sports Array", copySports) */



// Shallow copy using Array.from method

/* let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b:'Tennis'}]

let copySports = Array.from(sports)

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log("Original Sports Array", sports)
console.log("Copy Sports Array", copySports) */



// Shallow copy using slice method

/* let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b:'Tennis'}]

let copySports = sports.slice(0)

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log("Original Sports Array", sports)
console.log("Copy Sports Array", copySports) */



// -------------------------------------> Deep Copies <--------------------------------------------

// -> reference data type i.e object or array,  can create a copy at 1st level as well as nested level 
// that is called Deep copy

// JSON.parse(JSON.stringify()) -> it creates different reference for all levels like 1st level, nested level

/* let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b:'Tennis'}]

let copySports = JSON.parse(JSON.stringify(sports))

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log("Original Sports Array", sports)
console.log("Copy Sports Array", copySports) */






// -----------------------------------> Using object <------------------------------------

/* let obj = {
    name: 'Admin',
    age: 25
}

let newObj = obj;

newObj.name = 'Streve'
console.log(obj)
console.log(newObj) */



// shallow copy using spread

/* let obj = {
    name: 'Admin',
    age: 25
}

let newObj = {...obj}

newObj.name = 'Streve'

console.log(obj)
console.log(newObj) */



// Deep Copies

/* let person = {
    name: 'Mrinal',
    age: 22,
    hobbies: ['sports', 'coding', 'music']
}

let newPerson = JSON.parse(JSON.stringify(person))

newPerson.age = 55
newPerson.hobbies[0] = 'dancing'

console.log(person)
console.log(newPerson) */



// Shallow Copies using Object.assign method

/* let person ={
    name: 'Mrinal',
    age: 22,
    hobbies: ['sports', 'coding', 'music']
}

let newPerson = Object.assign({}, person)

newPerson.age = 55
newPerson.hobbies[1] = 'Programming'

console.log(person)
console.log(newPerson) */



// Shallow copies using spread operator

let person ={
    name: 'Mrinal',
    age: 22,
    hobbies: ['sports', 'coding', 'music']
}

let newPerson = {...person}

newPerson.age = 55
newPerson.hobbies[1] = 'Programming'

console.log(person)
console.log(newPerson)