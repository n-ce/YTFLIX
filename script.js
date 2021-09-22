//DARK MODE
var checkBox = document.querySelector('.uk-checkbox');
var body = document.body.style;
var nav = document.querySelector('nav').style;

function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y), body.backgroundColor = nav.backgroundColor = y;
}

//prefers color scheme
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {

    meta("#1f1f1f");
    body.backgroundColor = "#121212";
    checkBox.checked = true;
  } else {
    meta("crimson");
    body.backgroundColor = "white";
    checkBox.checked = false;
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

//local storage
if (window.localStorage.getItem('data-theme') == "#1f1f1f") {
  window.localStorage.setItem('data-theme', "#1f1f1f");
  meta("#1f1f1f");
  body.backgroundColor = "#121212";
  checkBox.checked = true;
}
checkBox.onclick = function() {
  if (checkBox.checked == true) {
    window.localStorage.setItem('data-theme', "#1f1f1f");
    meta("#1f1f1f");
    body.backgroundColor = "#121212";
  } else {
    window.localStorage.setItem('data-theme', "crimson");
    meta("crimson");
    body.backgroundColor = "white";
  }
}

//SEARCH
const search = document.querySelector(".uk-search-input");
search.onkeyup = function() {
  let input = search.value;
  input = input.toLowerCase();
  let x = document.querySelectorAll('li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

//FETCH DATA
function parse(Y) {
  return fetch("../Databases/" + Y + ".json").then(function(response) {
    return response.json();
  }).then(function(data) {
    appendData(data);
  }).catch(function(err) {
    console.log('error: ' + err);
  });;
}

var addlist = document.querySelectorAll('.uk-list');

//Click Detection
var countO = countA = countE = countH = countK = 0;

var li = document.querySelectorAll('li');

li[0].onclick = function() {
  if (countO % 2 == 0) {
    countO++;
    a = 0;
    parse('Originals');
  }
  else {
    countO--;
    while (addlist[0].hasChildNodes()) {
      addlist[0].removeChild(addlist[0].firstChild);
    }
  }
}
li[1].onclick = function() {
  if (countA % 2 == 0) {
    countA++;
    a = 1;
    parse('Anime');
  }
  else {
    countA--;
    while (addlist[1].hasChildNodes()) {
      addlist[1].removeChild(addlist[1].firstChild);
    }
  }
}
li[2].onclick = function() {
  if (countE % 2 == 0) {
    countE++;
    a = 2;
    parse('English');
  }
  else {
    countE--;
    while (addlist[2].hasChildNodes()) {
      addlist[2].removeChild(addlist[2].firstChild);
    }
  }
}
li[3].onclick = function() {
  if (countH % 2 == 0) {
    countH++;
    a = 3;
    parse('Hindi');
  }
  else {
    countH--;
    while (addlist[3].hasChildNodes()) {
      addlist[3].removeChild(addlist[3].firstChild);
    }
  }
}
li[4].onclick = function() {
  if (countK % 2 == 0) {
    countK++;
    a = 4;
    parse('Korean');
  }
  else {
    countK--;
    while (addlist[4].hasChildNodes()) {
      addlist[4].removeChild(addlist[4].firstChild);
    }
  }
}

//Loading the list

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML = '<a href=\"https://youtube.com/' + data[i].URL + '\">' + data[i].Name + '</a>';
    addlist[a].appendChild(list);
  }
}