// class penguin{
//     constructor(){
//         this.habitat="Antartika";
//     }
//     printPlaceOfOrigin(){
//         console.log(this.habitat);
//     }
// }
// const myPenguin = new penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();


// inheritance (extends keyword)
// class livingOrganism{
//     constructor(){
//         this.breaths=true;
//     }
//     isBreathing(){
//         console.log(this.breaths);
//     }
// }

// class Bird extends livingOrganism{
//     constructor(){
//         super();   // used to run the constructor of parent
//         this.eats=true;
//     }
//     printHabit(){
//         console.log(this.eats);
//     }
// }

// class penguin extends Bird{
//     constructor(){
//         super();
//         this.habitat="Antartica";
//     }
//     printPlaceOfOrigin(){
//         console.log(this.habitat);
//     }
// }

// const myPenguin=new penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();
// myPenguin.printHabit();

// // must call super constructor in derived class before accessing 'this' or returning from derived constructor.


class Bird{
    eats=true;

    printHabit = () => {
        console.log(this.eats);
    };
}

class penguin extends Bird{
    habitat="Antartica";

    printPlaceOfOrigin = () => {
        console.log(this.habitat);
    };
}

const myPenguin = new penguin();
console.log(myPenguin);
myPenguin.printPlaceOfOrigin();
myPenguin.printHabit();