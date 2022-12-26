// Closure


var sum = function(a){      // anonomus function -> a function without name 
    console.log("Live Viewers "+a);    // Live Viewers 200
    var c = 4;
    return function(b){
        return a + b + c;
    }
}

var store = sum(200);  // calling
console.log(store(5));  // 209



// 2nd example

var sum = function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}

var store = sum(3,4,5);
console.log(store.getSumTwo());   // 7
console.log(store.getSumThree()); // 12
