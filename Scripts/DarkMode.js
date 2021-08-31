var checkBox = document.querySelector('.uk-checkbox');
var theme = window.localStorage.getItem('data-theme');
var body = document.body.style;
var nav = document.querySelector('.nav').style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y),body.backgroundColor = nav.backgroundColor = y,    window.localStorage.setItem('data-theme', y);
}
if (theme == "black"){
  meta("black");
  checkBox.checked = true;
}
checkBox.onchange=function() {
  if (checkBox.checked==true) {
    meta("black");
  }else{
    meta("#333333");
    body.backgroundColor = "white";
  }
}
