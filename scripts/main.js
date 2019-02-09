// Element
var footer = document.querySelector('footer');

// Event
footer.addEventListener('click', toggleBlackAndWhite);

// Execution
function toggleBlackAndWhite() {
  document.body.classList.toggle('black-and-white');
}
