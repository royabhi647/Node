// Debounce
 // -> In JavaScript, a debounce function makes sure that your code is only triggered once per user input.
 // Search box suggestions, text-field auto-saves,
 // and eliminating double-button clicks are all use cases for debounce.


 // In JavaScript, the use case is similar. We want to trigger a function, but only once per use case.
 // Let's say that we want to show suggestions for a search query,
 // but only after a visitor has finished typing it.


let counter = 0;

function getData(){
    console.log("fetching Data"+counter++);
}


function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            call();
        },d)
    }
}

const BetterFunction = myDebounce(getData,1000);