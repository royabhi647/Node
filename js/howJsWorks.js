var num=5;
function cube(num){
    var res=num*num*num;
    return res;
}
var ans1=cube(num);
console.log(ans1);

var ans2=cube(10);
console.log(ans2);

var ans3=cube();
console.log(ans3);

console.log(""+cube);

console.log(undefined *5* undefined);