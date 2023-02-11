const categoryBtn = document.querySelectorAll('li');
//DARK MODE
const checkBox = document.querySelector('.uk-checkbox');
const nav = document.querySelector('nav').style;

function theme(navColor, bodyColor) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", navColor);
  document.body.style.backgroundColor = bodyColor;
  nav.backgroundColor = navColor;
}

//prefers color scheme
let colorSchemeQueryList = matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    theme("#1f1f1f", "#121212");
    checkBox.checked = true;
  } else {
    theme("#ff4548", "white");
    checkBox.checked = false;
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

//local storage
if (localStorage.getItem('data-theme')) {
  theme("#1f1f1f", "#121212");
  checkBox.checked = true;
}
checkBox.onclick = function() {
  if (checkBox.checked) {
    localStorage.setItem('data-theme', "#1f1f1f");
    theme("#1f1f1f", "#121212");
  } else {
    localStorage.clear();
    theme("#ff4548", "white");
  }
}

//SEARCH
const search = document.querySelector(".uk-search-input");

search.onkeyup = function() {
  for (const i of categoryBtn)
    !i.innerHTML.toLowerCase()
    .includes(search.value.toLowerCase()) ?
    i.style.display = "none" :
    i.style.display = "list-item";

}

//FETCH DATA
const addlist = document.querySelectorAll('.uk-list');
const categories = ['Originals', 'Anime', 'English', 'Hindi', 'Korean'];
const categoryClosed = [true, true, true, true, true];

categories.forEach((v, i) => {
  categoryBtn[i].onclick = function() {
    if (categoryClosed[i]) {
      fetch(`https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/${v}.md`)
        .then(res => res.text())
        .then(text => { // ⬇️ converts markdown to json
          for (const v of JSON.parse(text.slice(3))) {
            const list = document.createElement("li");
            list.innerHTML = `<a href="https://youtube.com/${v.URL}">${v.Name}</a>`;
            addlist[i].appendChild(list);
          }
        })
        .catch(err => alert(err))
    } else {
      while (addlist[i].hasChildNodes())
        addlist[i].removeChild(addlist[i].firstChild)
    }
    categoryClosed[i] = !categoryClosed[i];
  }
})