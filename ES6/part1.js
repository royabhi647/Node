// Rest and Spread operator

// Rest (rest of element or remaining of element is combined into an array) syntax(...rest)

function addNumbers(a,b,c, ...other){
    console.log(other);  // [ 8, 9, 7, 8, 9 ]
    return a + b + c;
}

const res = addNumbers(2,5,6,8,9,7,8,9);
console.log(res);  // 13


// Spread  (combined elements of array are expands or opened )

var names = ["Ajay", "Anuj", "Vivek"];

function getNames(name1,name2,name3){
    console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]);  // Ajay Anuj Vivek
getNames(...names);  // spread operator      Ajay Anuj Vivek
getNames(names);   // [ 'Ajay', 'Anuj', 'Vivek' ]


// Object ke sath -> Rest

var students = {
    name: "Ajay",
    age: "28",
    hobbies: ["Cricket", "Singing"]
}

// const age = students.age;
//  const {age} = students;
const {...rest} = students;
console.log(rest);   // { name: 'Ajay', age: '28', hobbies: [ 'Cricket', 'Singing' ] }


// Object ke sath -> Spread

var newStudent = {
    ...students,
    age:"29"
}

console.log(newStudent);  // { name: 'Ajay', age: '29', hobbies: [ 'Cricket', 'Singing' ] }