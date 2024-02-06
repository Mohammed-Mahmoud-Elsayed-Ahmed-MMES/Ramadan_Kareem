const checkbox1 = document.querySelector('#switch');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
// const p = document.querySelectorAll('p');

checkbox1.addEventListener('click', function() {
  if (checkbox1.checked) {
    body.style.backgroundImage = "url('../Images/dark mode image of R.jpg')";
    h2.style.color = "#fef5e3";
  } else {
    body.style.backgroundImage = "url('../Images/—Pngtree—ramadan kareem islamic background banner_1720785.jpg')";
    h2.style.color = "#572b0c";
  }
});