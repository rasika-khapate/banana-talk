var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-area");
var textOutput = document.querySelector("#output");

btnTranslate.addEventListener("click", clickEventHandler)

function clickEventHandler() 
{
  textOutput.innerText = "translated to " + textInput.value
}