// Callbacks, Promises, Async & Await


// callback
const datas = [
    {name: "Ajay", Profession: "Software Engineer"},
    {name: "Anuj", Profession: "Software Engineer"}
];

function getDatas(){
    setTimeout=(()=>{
        let output = "";
        datas.forEach((data,index)=>{
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML=output;   // Ajay, Anuj, Vivek
    },1000)
}

function createdata(newdata,callback){
    setTimeout=(()=>{
        datas.push(newdata);   // push into datas then call callback function i.e getDatas() function
        callback();
    },2000);
}

createdata({name: "Vivek", Profession: "Software Engineer"},getDatas)



// Promises

const datas = [
    {name: "Ajay", Profession: "Software Engineer"},
    {name: "Anuj", Profession: "Software Engineer"}
];

function getDatas(){
    setTimeout=(()=>{
        let output = "";
        datas.forEach((data,index)=>{
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML=output;   // Ajay, Anuj, Vivek
    },1000)
}

function createdata(newdata){
    return new Promise((resolve, reject) =>{
        setTimeout=(()=>{
            datas.push(newdata);  
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("kuch sahi nhi hai...");
            }
        },2000);
    })
}

createdata({name: "Vivek", Profession: "Software Engineer"})
.then(getDatas)
.catch(err => console.log(err))




// Async & Await


async function start(){
    await createdata({name:"Vivek",Profession:"Software Engineer"})
    getDatas();
}

start();