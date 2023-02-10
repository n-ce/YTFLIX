//DARK MODE
const body = document.body.style;
const checkBox = document.querySelector('.uk-checkbox');
const nav = document.querySelector('nav').style;

function meta(y, b) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", y);
  body.backgroundColor = b;
  nav.backgroundColor = y;

}

//prefers color scheme
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    meta("#1f1f1f", "#121212");
    checkBox.checked = true;
  } else {
    meta("#ff4548", "white");
    checkBox.checked = false;
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

//local storage
if (window.localStorage.getItem('data-theme') == "#1f1f1f") {
  window.localStorage.setItem('data-theme', "#1f1f1f");
  meta("#1f1f1f", "#121212");
  checkBox.checked = true;
}
checkBox.onclick = function() {
  if (checkBox.checked) {
    window.localStorage.setItem('data-theme', "#1f1f1f");
    meta("#1f1f1f", "#121212");
  } else {
    window.localStorage.setItem('data-theme', "#ff4548");
    meta("#ff4548", "white");
  }
}

//SEARCH
const search = document.querySelector(".uk-search-input");
search.onkeyup = function() {
  let input = search.value.toLowerCase();
  const x = document.querySelectorAll('li');
  for (let i = 0; i < x.length; i++) {
    !x[i].innerHTML.toLowerCase().includes(input) ?
      x[i].style.display = "none" :

      x[i].style.display = "list-item";
  }
}

//FETCH DATA
function parse(i) {
  fetch("../Databases/" + ['Originals', 'Anime', 'English', 'Hindi', 'Korean'][i] + ".json")
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const list = document.createElement("li");
        list.innerHTML = '<a href=\"https://youtube.com/' + data[i].URL + '\">' + data[i].Name + '</a>';
        addlist[a].appendChild(list);
      }
    })
    .catch(err => console.log('error: ' + err))
}

const addlist = document.querySelectorAll('.uk-list');

//Click Detection
let countO = countA = countE = countH = countK = true;

const count = [countO, countA, countE, countH, countK];

for (let i = 0; i < 5; i++) {
  document.querySelectorAll('li')[i].onclick = function() {

    if (count[i]) parse(i, a = i)
    else {
      
      while (addlist[i].hasChildNodes()) {
        addlist[i].removeChild(addlist[i].firstChild)
      }
      
    }
    count[i] = !count[i];
  }
}