const puppeteer=require("puppeteer");
let email="royabhi647@gmail.com";
let password="Abhishek@123";
let {answer}=require("./codes");

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
  let emailWillBeTypedPromise=curTab.type("input[name='username']",email,{delay:100});
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

  let allQuesPromise=curTab.waitForSelector(`a[data-analytics="ChallengeListChallengeName"]`);  //-2
  return allQuesPromise;                                                                        //-2
})                                                                                       //

.then(function(){                                                                     //-2
  function getAllQuesLinks(){                                                         //-2
    let allElemArr=document.querySelectorAll(`a[data-analytics="ChallengeListChallengeName"]`);   //-2
    let linksArr=[];                                                                              //-2
    for(let i=0;i<allElemArr.length;i++){                                                         //-2
      linksArr.push(allElemArr[i].getAttribute("href"));                                          //-2
    }                                                                                             //-2
    return linksArr;                                                                              //-2
  }                                                                                               //-2
  let linksArrPromise=curTab.evaluate(getAllQuesLinks);                                           //-2
  return linksArrPromise;                                                                         //-2
})                                                                                                //-2
.then (function(linksArr){                                                                        //-2
  console.log("links to all ques received");                                                      //-2

  let questionWillBeSolvedPromise=questionSolver(linksArr[0],0);                                  //-2
  for(let i=1;i<linksArr.length;i++){                                                             //-2
    questionWillBeSolvedPromise=questionWillBeSolvedPromise.then(function(){                      //-2
      return questionSolver(linksArr[i],i);                                                       //-2
    })                                                                                            //-2
  }                                                                                               //-2
  return questionWillBeSolvedPromise;                                                             //-2
})                                                                                                //-2
.then(function(){                                                                                 //-2
  console.log("question is solved");                                                              //-2
})                                                                                                //-2
.catch(function(err){                                                                             //-2
  console.log(err);                                                                               //-2
});                                                                                               //-2

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





function questionSolver(url,idx){
  return new Promise(function(resolve,reject){
    let fullLink=`https://www.hackerrank.com${url}`;
    let goToQuesPagePromise=curTab.goto(fullLink);
    goToQuesPagePromise
    .then(function(){
      console.log("question opened");
      //tick the custom input box mark
      let waitForCheckBoxAndClickPromise=waitAndClick(".checkbox-input");
      return waitForCheckBoxAndClickPromise;
    })
    .then(function(){
      let waitForTextBoxPromise=curTab.waitForSelector(".custominput");
      return waitForTextBoxPromise;
    })
    .then(function(){
      let codeWillBeTypedPromise=curTab.type("custominput",answer[idx],{
        delay:100,
      });
      return codeWillBeTypedPromise;
    })
    .then (function(){
      //control key is pressed promise
      let controlPressedPromise=curTab.keyboard.down("Control");
      return controlPressedPromise;
    })
    .then (function(){
      let aKeyPressedPromise=curTab.keyboard.press("a");
      return aKeyPressedPromise;
    })
    .then (function(){
      let xKeyPressedPromise=curTab.keyboard.press("x");
      return xKeyPressedPromise;
    })
    .then(function(){
      let ctrlIsReleasedPromise=curTab.keyboard.up("control");
      return ctrlIsReleasedPromise;
    })
    .then(function(){
      //select the editor promise
      let cursorOnEditorPromise=curTab.click(".monaco-editor.no-user-select.vs");
      return cursorOnEditorPromise;
    })
    .then (function(){
      //control key is pressed promise
      let controlPressedPromise=curTab.keyboard.down("Control");
      return controlPressedPromise;
    })
    .then(function(){
      let aKeyPressedPromise=curTab.keyboard.press("A");
      return aKeyPressedPromise;
    })
    .then (function(){
      let vKeyPressedPromise=curTab.keyboard.press("V");
      return vKeyPressedPromise;
    })
    .then(function(){
      let controlDownPromise=curTab.keyboard.up("Control");
      return controlDownPromise;
    })
    .then(function(){
      let submitButtonClickedPromise=curTab.click(".hr-monaco-submit");
      return submitButtonClickedPromise;
    })
    .then(function(){
      console.log("code submitted successfully");
      resolve();
    })
    .catch(function(err){
      reject(err);
    });
  });
}