// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("btnForm");





// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// Close Button//
// RESET all inputs
let RemoveRecipeName = document.getElementById('recipeName');
let RemoveRecipeDescription = document.getElementById('recipeDescription');
let RemoveRecipeDirections = document.getElementById('recipeDirections');
let RemoveRecipeImageUrl = document.getElementById('recipeImageUrl');
let RemoveRecipeType = document.getElementById('recipeType');
let frm = document.getElementById('frm');
let h3 = document.createElement('h3');

// close bnt
let btnClose = document.getElementById('btnClose');
btnClose.onclick = function(){
    modal.style.display = 'none';
    RemoveRecipeName.value ='';
    RemoveRecipeDescription.value ='';
    RemoveRecipeDirections.value ='';
    RemoveRecipeImageUrl.value ='';
    RemoveRecipeType.value = 'Breakfast';
    h3.innerHTML = '';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}