// call, apply & bind


// call -> (Calls a method of an object, substituting another object for the current object.)

// let userDetails = {
//     name: "Ajay Suneja",
//     age: 28,
//     Designation: "Software Engineer",
//     printDetails:function(){
//         console.log(this.name);       
//     }
// }

// userDetails.printDetails();



// let userDetails2 = {
//     name: "Anuj Suneja",
//     age: 29,
//     Designation: "Software Engineer",
// }

// userDetails.printDetails.call(userDetails2);



// 2nd example of call

// let userDetails = {
//     name: "Ajay Suneja",
//     age: 28,
//     Designation: "Software Engineer",
// }

// let printDetails=function(){
//     console.log(this.name);
// }

// printDetails.call(userDetails);


// let userDetails2 = {
//     name: "Anuj Suneja",
//     age: 29,
//     Designation: "Software Engineer",
// }

// printDetails.call(userDetails2);



// 3rd example of call

let userDetails = {
    name: "Ajay Suneja",
    age: 28,
    Designation: "Software Engineer",
}

let printDetails=function(state,country){
    console.log(this.name+" "+state+" "+country);
}

printDetails.call(userDetails,"Delhi","India");


let userDetails2 = {
    name: "Anuj Suneja",
    age: 29,
    Designation: "Software Engineer",
}

printDetails.call(userDetails2,"Delhi","India");


// Apply

printDetails.apply(userDetails2,["Delhi","India"]);


// Bind

let newfun = printDetails.bind(userDetails,"Delhi","India");
newfun();