const puppeteer=require("puppeteer");

let curTab;
let browserOPenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],

});

browserOPenPromise
    .then(function(browser){
        console.log("browser is open");
    })