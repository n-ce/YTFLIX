var checkBox = document.querySelector('.uk-checkbox');
var theme = window.localStorage.getItem('data-theme');
var body = document.body.style;
var nav = document.querySelector('.nav').style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y),body.backgroundColor = nav.backgroundColor = y;
}
if (theme == 'dark'){
  meta("black");
  checkBox.checked = theme == 'dark' ? true : false;
	}
checkBox.onchange=function() {
  if (checkBox.checked==true) {
    meta("black");
    window.localStorage.setItem('data-theme', 'dark');
  }else{
		meta("#333333");
		body.backgroundColor = "white";
		window.localStorage.setItem('data-theme', 'light');
  }
}