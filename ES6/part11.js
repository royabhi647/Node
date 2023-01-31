// Currying function in javaScript

/* function addition(a,b,c){
    return a+b+c;
}

let res = addition(2,3,4);
console.log(res); */


// closure
function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let res = Addition(2);
let data = res(4);
let data1 = data(7);
console.log(data1);



// currying

/* function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let res1 = Addition(2)(4)(7);
console.log(res1); */


userObj = {
    name: "Ajay",
    age: 28
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}

let res1 = userInfo(userObj);
console.log(res1);
console.log(res1('name'));
console.log(res1('age'));