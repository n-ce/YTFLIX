const search = document.getElementsByClassName('uk-search-input')[0];
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
