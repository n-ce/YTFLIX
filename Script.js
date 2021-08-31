//DARK MODE
var checkBox = document.querySelector('input');
var theme = window.localStorage.getItem('data-theme');
var body = document.body.style;
var nav = document.querySelector('.nav').style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y),body.backgroundColor = nav.backgroundColor = y,window.localStorage.setItem('data-theme', y);
}
if (theme == "black"){
  meta("black");
  checkBox.checked = true;
}
checkBox.onclick=function() {
  if (checkBox.checked==true) {
    meta("black");
  }else{
    meta("#333333");
    body.backgroundColor = "white";
  }
}

//SEARCH
const search = document.querySelector("input");
search.onkeyup=function(){
  let input = search.value;
  input=input.toLowerCase();
  let x = document.querySelectorAll('li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
    }else {
      x[i].style.display="list-item";
    }
  }
}

//FETCH DATA
function parse(Y){
return fetch("../Databases/"+Y+".json").then(function (response) {
      return response.json();
    }).then(function (data) {
      appendData(data);
    }).catch(function (err) {
      console.log('error: ' + err);
    });
}

//Loading the list
function appendData(data) {
  for (var i = 1; i < data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML ='<a href=\"https://youtu.be/'+data[i].URL+'\">'+data[i].Name +'</a>';
    document.querySelector('ul').appendChild(list);
  }
}