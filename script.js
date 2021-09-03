//DARK MODE
var checkBox = document.querySelector('.uk-checkbox');
var body = document.body.style;
var nav = document.querySelector('nav').style;
function meta(y) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", y),body.backgroundColor = nav.backgroundColor = y,window.localStorage.setItem('data-theme', y);
}
if (window.localStorage.getItem('data-theme') == "black"){
  meta("black");
  checkBox.checked = true;
}
checkBox.onclick=function() {
  if (checkBox.checked==true) {
    meta("black");
  }else{
    meta("crimson");
    body.backgroundColor="white";
  }
}

//SEARCH
const search = document.querySelector(".uk-search-input");
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
    });;
}

//Click Detection
var countO=countA=countE=countH=1;
var b = undefined;
var li=document.querySelectorAll('li');
li[0].onclick=function(){
  countO++;
  if(countO%2==0){a = 0;b=undefined}
  else{b=0}
}
li[1].onclick = function() {
  countA++;
  if(countA%2==0){a = 1;b=undefined}
  else{b = 1;}
}
li[2].onclick = function() {
  countE++;
  if(countE%2==0){a = 2;b=undefined}
  else{b=2;}
}
li[3].onclick = function() {
  countH++;
  if(countH%2==0){a = 3;b=undefined}
  else{b = 3;}
}

//Remove the added list
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//Loading the list
var addlist = document.querySelectorAll('.uk-list');
function appendData(data) {
 for (var i = 0; i < data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML ='<a href=\"https://youtu.be/'+data[i].URL+'\">'+data[i].Name +'</a>';
    addlist[a].appendChild(list);
    if(b!=undefined){
    console.log(b);
    removeAllChildNodes(addlist[b]);}
  }
}

