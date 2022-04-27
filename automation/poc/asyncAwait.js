// promises
// clever person advices

function fp(){
    return new Promise(function (resolve, reject){
        resolve("hi");
    });
}

let promisifyFunc = fp();

promisifyFunc.then(function (data){
    console.log(data);
});

promisifyFunc.catch(function(error){
    console.log(err);
});

// Using async keyword  -> easy language

async function f() {
    return "hello";
}

let asyncf = f();

asyncf.then(function (data){
    console.log("data");
});

// asyncf.then(alert);