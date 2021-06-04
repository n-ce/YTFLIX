//TOGGLE

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

//MODAL
const modal = document.querySelector('.modal');
document.querySelector('#btn').addEventListener('click',function() {
  modal.style.display = 'block'
})
document.querySelector('.modal-close').addEventListener('click',function() {
  modal.style.display = 'none'
})
window.addEventListener('click',function(event) {
  if (event.target.className ==='modal-background') {
    modal.style.display = 'none'
  }})

//Form
document.getElementById("form").onclick = function() { myFunction() };
function myFunction() {
  document.querySelector('form').classList.toggle("show");
}

//Dark Mode
var checkBox = document.querySelector('input[type=checkbox]');

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