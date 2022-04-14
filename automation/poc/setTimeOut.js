// function yolo(){
//     var a=10;
//     function cb(err,res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Hello How are you ? ");
//         }
//     }
//      // function to be executed(callback fun) , time(ms) after which cb to be executed
//      // 1 second =1000 milli second
//     setTimeout(cb,5000);
//     console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);                     //->output=10,100,Hello How are you?




// const request = require ("request");
// let url ="https://www.worldometers.info/coronavirus/"
// function yolo(){
//     var a=10;
//     function cb(err,res,body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Hello how are you ? ");
//             console.log("statusCode is",res.statusCode);
//         }
//     }
//     //function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     request(url,cb);
//     console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);                   //->output=10,100,Hello how are you?,statusCode is 200




/* Print 1 to 10 on every 2 second */
// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000*i);
// }


/* print 1 to 10 on every 2 second  by var keyword*/
// for(var i=1;i<=10;i++){
    //hint- closures and scope ->wraping

//     function outer(a){
//         setTimeout(function(){
//             console.log(a);
//         }, 2000*a);
//     }
//     outer(i);
// }


/* print 1 to 10 on every 2 second */
for(var i=1;i<=10;i++){
    function cb(a){
        console.log(a);
    };
    setTimeout(cb, 2000*i, i);
}