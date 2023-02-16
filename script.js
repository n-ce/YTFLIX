//DARK MODE
const checkBox = document.querySelector('.uk-checkbox');

const theme = (navColor, bodyColor) => {
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
checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    localStorage.setItem('data-theme', "#1f1f1f");
    theme("#1f1f1f", "#121212");
  } else {
    localStorage.clear();
    theme("#ff4548", "white");
  }
});

//SEARCH
const search = document.getElementsByClassName("uk-search-input")[0];
search.addEventListener('keyup', () => {
  for (const x of document.querySelectorAll('li'))
    !x.innerHTML.toLowerCase().includes(search.value.toLowerCase()) ?
    x.style.display = "none" :
    x.style.display = "list-item";
});



//FETCH DATA
let items;
fetch('https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/Home.md')
  .then(res => res.text())
  .then(homeMD => JSON.parse(homeMD.slice(3)))
  .then(homeJSON => {
    for (const category of homeJSON) {

      fetch(`https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/${category.name}.md`)
        .then(res => res.text())
        .then(categoryMD => JSON.parse(categoryMD.slice(3)))
        .then(categoryJSON => {
          let list = '';
          for (const object of categoryJSON)
            list += `<li><a href="https://youtube.com/${object.URL}">${object.Name}</a></li>`;

          document.getElementById('container').innerHTML +=
            `<li onclick="document.getElementById('${category.name}').classList.toggle('hide')">
          <a class="uk-accordion-title uk-card uk-card-hover uk-card-body uk-background-cover uk-card-secondary" data-src=${category.thumbnail} uk-img>
            <h3 class="uk-card-title uk-text-bolder">${category.name}</h3>
            <p id="text">${category.description}</p>
          </a>
          <ul id="${category.name}" class="uk-accordion-content uk-list uk-list-large uk-list-divider hide">${list}</ul>
        </li>`;
        })
        .catch(err => console.log(err));
    }
  })
  .catch(err => console.log('e:' + err))