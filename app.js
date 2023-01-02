var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-area");
var textOutput = document.querySelector("#output");

btnTranslate.addEventListener("click", clickEventHandler)



var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text)
{
  return serverURL + "?" +"text=" + text
}

function errorHandler(error)
{
  console.log("error occured", error);
  alert("something seems wrong with the server, please try again after some time");
}

function clickEventHandler() 
{
  // textOutput.innerText = "translated to " + textInput.value

var inputText = textInput.value;

  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json =>
    {var translatedText = json.contents.translated
      textOutput.innerText = translatedText}
    )
  .catch(errorHandler)
}