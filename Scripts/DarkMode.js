var checkBox = document.getElementsByClassName('uk-checkbox')[0];
var theme = window.localStorage.getItem('data-theme');
var body = document.body.style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y);
}
if (theme == 'dark'){
  body.backgroundColor = "black";
  meta("black");
  checkBox.checked = theme == 'dark' ? true : false;
	}
checkBox.onchange=function() {
  if (checkBox.checked==true) {
    body.backgroundColor = document.querySelector('.nav').style.backgroundColor = "black";
    meta("black");
    window.localStorage.setItem('data-theme', 'dark');
  }else{
    body.backgroundColor = "white";
		document.querySelector('.nav').style.backgroundColor = "#333333";
		meta("#333333");
		window.localStorage.setItem('data-theme', 'light');
  }
}