function search() {let input = document.querySelector('input').value;input=input.toLowerCase();let x = document.querySelectorAll('li');for (i = 0; i < x.length; i++) {if (!x[i].innerHTML.toLowerCase().includes(input)) {x[i].style.display="none";}else {x[i].style.display="list-item";}}}
function darkmode()
{
	if (document.querySelector("input").checked == true) {
		document.body.style.backgroundColor = "black";
	} else {
		document.body.style.backgroundColor = "white";
	}}