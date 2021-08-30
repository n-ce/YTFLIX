var checkBox = document.querySelector('.uk-checkbox');
var theme = window.localStorage.getItem('data-theme');
var body = document.body.style;
var nav = document.querySelector('.nav').style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y);
}
if (theme == 'dark'){
  body.backgroundColor = nav.backgroundColor = "black";
  meta("black");
  checkBox.checked = theme == 'dark' ? true : false;
	}
checkBox.onchange=function() {
  if (checkBox.checked==true) {
    body.backgroundColor = nav.backgroundColor = "black";
    meta("black");
    window.localStorage.setItem('data-theme', 'dark');
  }else{
    body.backgroundColor = "white";
		nav.backgroundColor = "#333333";
		meta("#333333");
		window.localStorage.setItem('data-theme', 'light');
  }
}