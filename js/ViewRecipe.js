// Get the modal
let showModal = document.getElementById("ShowMyModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == showModal) {
    showModal.style.display = "none";
  }
}