const puppeteer=require("puppeteer");
let email="royabhi647@gmail.com";
let password="Abhishek@123";

let curTab;

let browserOpenPromise=puppeteer.launch({
  headless:false,
  defaultViewport:null,
  args:["--start-maximized"],
});
// console.log("browserOpenPromise");
browserOpenPromise.then(function(browser){
  console.log("browser is open");
  console.log(browserOpenPromise);
  // console.log(browser);

  let allTabsPromise=browser.pages();
  return allTabsPromise;
})
.then(function(allTabsArr){
  curTab=allTabsArr[0];
  console.log("new page");

  let visitingLoginPagePromise=curTab.goto("https://www.hackerrank.com/auth/login");
  return visitingLoginPagePromise;
})
.then(function(data){
  // console.log(data);
  console.log("Hackerrank login page opened");
  let emailWillBeTypedPromise=curTab.type("input[name='username']",email);
  return emailWillBeTypedPromise;
})
.then(function(){
  console.log("email is typed");

  let passwordWillBeTypedPromise=curTab.type("input[name='password']",password);
  return passwordWillBeTypedPromise;
})
.then(function(){
  console.log("password is typed");

  let willBeLoggedInPromise=curTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
  return willBeLoggedInPromise;
})
.then(function(){
  console.log("logged in into hackerrank successfully");

  let algorithmTabWillBeOpenedPromise=waitAndClick("div[data-automation='algorithms']");     //
  return algorithmTabWillBeOpenedPromise;                                                    //
})                                                                                          //
.then(function(){                                                                           //
  console.log("algorithm page is opened");                                                //
})                                                                                       //

function waitAndClick(algoBtn){                                 //
  let waitClickPromise=new Promise(function(resolve,reject){    // 
    let waitForSelectorPromise=curTab.waitForSelector(algoBtn); //  
    waitForSelectorPromise                                       //
    .then (function(){                                           //
      console.log("algo btn is found");                          //
      let clickPromise=curTab.click(algoBtn);                    //
      return clickPromise;                                        //
    })                                                           //
    .then (function(){                                          // 
      console.log("algo btn is clicked");                       //
      resolve();                                                 //
    })                                                          //
    .catch(function(err){                                       //
      reject(err);                                             //
    })                                                          //
  });                                                           //
  return waitClickPromise;                                    //
}                                                             //