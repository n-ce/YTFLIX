function search() {let input = document.querySelector('input').value;input=input.toLowerCase();let x = document.querySelectorAll('li');for (i = 0; i < x.length; i++) {if (!x[i].innerHTML.toLowerCase().includes(input)) {x[i].style.display="none";}else {x[i].style.display="list-item";}}}
var checkBox = document.querySelector("input");
	
	var theme = window.localStorage.getItem('data-theme');
	if (theme == 'dark') document.body.style.backgroundColor = "black";
	checkBox.checked = theme == 'dark' ? true : false;
	
	checkBox.addEventListener('change', function() {
		if (this.checked) {
			document.body.style.backgroundColor = "black";
			window.localStorage.setItem('data-theme', 'dark');
		} else {
			document.body.style.backgroundColor = "white";
			window.localStorage.setItem('data-theme', 'light');
		}
	});