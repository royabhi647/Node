// Event Bubbling & Capturing
// Stop Propagation, Immediate Propagation & Prevent Default


// 1 -> Event Bubbling -> child to parent
   //  -> Event Bubbling is a concept in the DOM (Document Object Model). 
   //It happens when an element receives an event,
   // and that event bubbles up (or you can say is transmitted or propagated) to its parent and
   // ancestor elements in the DOM tree until it gets to the root element.


/* var div = document.querySelector("div");

div.addEventListener("click",()=>{
    console.log("div")
}) */


/* var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("div")
})

button.addEventListener("click",()=>{
    console.log("button")
}) */


// 2 -> Event capturing  -> parent to child
// Event capturing is opposite to the event bubbling. 
//In event capturing the flow goes from outermost element to the target element.
// Whereas in case of event bubbling the flow goes from target element to the outermost element.

/* var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("div")
},true)

button.addEventListener("click",()=>{
    console.log("button")
},true) */


// 3 -> Stop Propogation
    // The stopPropagation() method prevents propagation of the same event from being called.
    //Propagation means bubbling up to parent elements or capturing down to child elements.


/* var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("div")
})

button.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("button")
}) */


// 4 -> Immediate Propogation
  // The stopImmediatePropagation() method prevents other listeners of the same event from being called.


/* var button = document.querySelector("button");

button.addEventListener("click",()=>{
    console.log("button");
})

button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log("button1");
})

button.addEventListener("click",()=>{
    console.log("button2");
}) */


// 5 -> prevent default
  // The preventDefault() method cancels the event if it is cancelable,
  // meaning that the default action that belongs to the event will not occur.


/* var a = document.querySelector("a");

a.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("prevent default");
}) */