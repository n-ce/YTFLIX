//DARK MODE
const checkBox = document.getElementById('checkbox');

function theme(navColor, bodyColor) {
	document.getElementById('tabColor').setAttribute("content", navColor);
	document.getElementById('nav').style.backgroundColor = navColor;
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
const search = document.getElementById("search_input");
const categories = document.getElementsByClassName('uk-card');
const search_list = document.getElementsByTagName('li');

document.getElementById('search_button').onclick = () => {
	for (const i of categories) {
		if (i.nextElementSibling.classList.contains('hide'))
			i.click();
		i.classList.add('hide');
	}
}
document.getElementsByClassName('uk-navbar-toggle')[0].onclick = () => {
	search.value = '';
	for (const li of search_list) li.style.display = 'list-item';
	for (const i of categories) {
		i.click();
		i.classList.remove('hide');
	}
}
search.addEventListener('keyup', () => {
	for (const x of search_list)
		x.style.display = !x.textContent.toLowerCase().includes(search.value.toLowerCase()) ?
		"none" :
		"list-item";
});



// DATA INJECTION


fetch('https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/Home.md')
	.then(res => res.text())
	.then(homeMD => JSON.parse(homeMD.slice(3)))
	.then(homeData => {
		for (const category of homeData) {

			fetch(`https://raw.githubusercontent.com/wiki/n-ce/YTFLIX/${category.name}.md`)
				.then(res => res.text())
				.then(categoryMD => JSON.parse(categoryMD.slice(3)))
				.then(categoryJSON => {

					const h3 = document.createElement('h3');
					h3.classList.add("uk-card-title", "uk-text-bolder");
					h3.textContent = category.name;

					const p = document.createElement('p');
					p.id = 'text';
					p.textContent = category.description;

					const a = document.createElement('a');
					a.classList.add("uk-accordion-title", "uk-card", "uk-card-hover", "uk-card-body", "uk-background-cover", "uk-card-secondary");
					a.dataset.src = category.thumbnail;
					a.setAttribute('uk-img', '');
					a.append(h3, p);

					const ul = document.createElement('ul');
					ul.id = category.name;
					ul.classList.add("uk-accordion-content", "uk-list", "uk-list-large", "uk-list-divider", "hide")
					for (const object of categoryJSON) {
						const list = document.createElement('li');
						const anchor = document.createElement('a');
						anchor.href = "https://youtube.com/" + object.URL;
						anchor.textContent = object.Name;
						list.appendChild(anchor);
						ul.appendChild(list);
					}

					const li = document.createElement('li');
					li.append(a, ul);
					li.setAttribute('onclick', `document.getElementById('${category.name}').classList.toggle("hide")`);

					document.getElementById('container').appendChild(li);
				})
		}
	});