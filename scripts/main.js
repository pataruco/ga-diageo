// Element
// Get footer
var footer = document.querySelector('footer');

// Event
// Add Event to listen a click
footer.addEventListener('click', toggleBlackAndWhite);

// Execution
function toggleBlackAndWhite() {
  // Get body and toogle class black-and-white
  document.body.classList.toggle('black-and-white');
}
