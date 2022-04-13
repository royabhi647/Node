function yolo(){
    var a=10;
    function cb(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log("Hello How are you ? ");
        }
    }
    setTimeout(cb,5000);
    console.log(a);
}
yolo();
let b=100;
console.log(b);