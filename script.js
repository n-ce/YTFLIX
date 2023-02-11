//DARK MODE
const checkBox = document.querySelector('.uk-checkbox');

function theme(navColor, bodyColor) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", navColor);
  document.querySelector('nav').style.backgroundColor = navColor;
  document.body.style.backgroundColor = bodyColor;
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

document.querySelector(".uk-search-input").onkeyup = function() {
  for (const x of document.querySelectorAll('li'))
    !x.innerHTML.toLowerCase().includes(this.value.toLowerCase()) ?
    x.style.display = "none" :
    x.style.display = "list-item";
}

//FETCH DATA
const addlist = document.querySelectorAll('.uk-list');
const categories = ['Originals', 'Anime', 'English', 'Hindi', 'Korean'];
const categoryHidden = [true, true, true, true, true];

categories.forEach((v, i) => {

  fetch(`https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/${v}.md`)
    .then(res => res.text())
    .then(text => { // ⬇️ converts markdown to json
      for (const x of JSON.parse(text.slice(3))) {
        const list = document.createElement("li");
        list.innerHTML = `<a href="https://youtube.com/${x.URL}">${x.Name}</a>`;
        addlist[i].appendChild(list);
      }
    })
    .catch(err => alert(err));

  addlist[i].style.display = 'none';

  document.querySelectorAll('li')[i].onclick = function() {
    categoryHidden[i] ?
      addlist[i].style.display = 'block' :
      addlist[i].style.display = 'none';
    categoryHidden[i] = !categoryHidden[i];
  }
})