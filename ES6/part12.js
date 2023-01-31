// Infinite Currying In javaScript

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(4)(5)(7)(9)());