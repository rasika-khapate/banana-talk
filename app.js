var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-area");

btnTranslate.addEventListener("click", clickEventHandler)

function clickEventHandler() 
{
  console.log("clicked") 
  console.log("input", textInput.value) 
};
