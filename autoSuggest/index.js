let myField = document.getElementById("my-textfield");
let msgsText = document.getElementById("messages");
let suggestionList = document.getElementById("suggestions");
myField.addEventListener("keyup", runQuery);


function runQuery(event) {
  const str = event.target.value;
  debounce(() => search(str), 300, true)();
  ;
}

function debounce(fn, time, immediate){
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    function functionCall(){
      timeout = null;
      if(!immediate){ fn.apply(context, args); }
    }

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
    if(callNow) fn.apply(context, args);
  }
}

async function search(str) {
  try {
    let results = await fetch('http://localhost:3000',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ string: str })
    }).then(response => response.json());
    populateSuggestions(results);
  } catch (error) {
    console.log(error);
    showErrorMsg(error);
  }
}

function populateSuggestions(arr) {
  suggestionList.innerHTML = "";
  arr.forEach(word => {
    let listItem = createListItem(word);
    suggestionList.appendChild(listItem);
  });
}

function createListItem(word) {
  let listItem = document.createElement("LI");
  let textnode = document.createTextNode(word);
  listItem.addEventListener('click', wordClick);
  listItem.appendChild(textnode);
  return listItem;
}

function showErrorMsg(message = 'Suggestions could not be loaded for unknown problems') {
  msgsText.innerHTML = "";
  msgsText.style.color = "red";
  let textNode = document.createTextNode(message);
  msgsText.appendChild(textNode);
}

function wordClick(event) {
  if(!event.target || !event.target.firstChild) { return; }
  let textNode = event.target.firstChild;
  let word = textNode.data;
  myField.value = word;
}