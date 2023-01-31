// Throttling in JavaScript
// Throttling is a technique in which, no matter how many times the user fires the event,
// the attached function will be executed only once in a given time interval.


const mythrottle=(fn,d)=>{
    return function(...args){
        document.getElementById("myid").disabled=true;
        setTimeout(()=>{
            fn();
        },d)
    }
}


const newFun = mythrottle(()=>{
    document.getElementById("myid").disabled=false;
    console.log("User clicked")
},1000)