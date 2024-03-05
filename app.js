try{
let userInput = "";
const buttomS = document.querySelectorAll("button");
const display = document.querySelector(".result input");
let arr = Array.from(buttomS);
arr.forEach((element) => {
  element.addEventListener("click", (evt) => {
    if (evt.target.value === "=" || evt.target.classList[1]==="fa-equals") {
      userInput = eval(userInput);
      display.value = userInput;
    }
    else if(evt.target.value==="#" || evt.target.classList[1]==="fa-delete-left"){
      display.value=userInput.slice(0,userInput.length-1);
      userInput= userInput.slice(0,userInput.length-1);
  
    }
    else if(evt.target.value==="C"){
      userInput="";
      display.value=userInput;
    }
    else if(evt.target.classList[0]==="fa-solid"){
      userInput += evt.target.classList[2];
      display.value=userInput;
    }
    else {
      userInput = userInput + evt.target.value;
      display.value=userInput;
      console.log(evt.target.value)
    }
  });
});
} catch(err){
  console.log(err);
}
