let recipes = [];

function Recipe(name, type, description, directions, imageUrl, id){
    this.name = name;
    this.type = type;
    this.description = description;
    this.directions = directions;
    this.imageUrl = imageUrl;
    this.id = id;
}

// btnCreate Recipe
let btnCreate = document.getElementById('btnCreate');
btnCreate.onclick = function(){
    validateInput();
}

function generateId(){
    let max = 0;
    for (let i = 0; i < recipes.length; i ++){
        if(recipes[i].id > max){
            max = recipes[i].id;
        }
    }
    return max + 1;
}

function validateInput(){
    let newRecipeName = recipeName.value;
    let newRecipeType = recipeType.value;
    let newRecipeDescription = recipeDescription.value;
    let newRecipeDirection = recipeDirections.value;
    let newRecipeImageUrl = recipeImageUrl.value;


    if(newRecipeName, newRecipeType, newRecipeDescription, newRecipeDirection, newRecipeImageUrl !=''){
        let exists = sameNameRecipe(newRecipeName);
        if(exists){
            let frm = document.getElementById('frm');
            let h3 = document.createElement('h3');
            h3.classList.add('h3W');
            h3.innerText = 'Recipe with same name already exists!'
    
            frm.appendChild(h3);
        }else{
            createRecipe();
        }

    }else{
        let frm = document.getElementById('frm');
        let h3 = document.createElement('h3');
        h3.classList.add('h3W');
        h3.innerText = 'The fields are empty!'
        frm.appendChild(h3);

    }
}

function createRecipe(){
        //get all input fields
        let recipeName = document.getElementById("recipeName");
        let recipeType = document.getElementById("recipeType");
        let recipeDescription = document.getElementById("recipeDescription");
        let recipeDirections = document.getElementById("recipeDirections");
        let recipeImageUrl = document.getElementById("recipeImageUrl");
            

        let newRecipeName = recipeName.value;
        let newRecipeType = recipeType.value;
        let newRecipeDescription = recipeDescription.value;
        let newRecipeDirection = recipeDirections.value;
        let newRecipeImageUrl = recipeImageUrl.value;
        let newId = generateId();
        
        let newRecipe = new Recipe(newRecipeName, newRecipeType, newRecipeDescription, newRecipeDirection, newRecipeImageUrl, newId);
        console.log(newRecipe);
        recipes.push(newRecipe);

        // Reset form fields
        recipeName.value = '';
        recipeType.value = '';       
        recipeDescription.value = ''; 
        recipeDirections.value = ''; 
        recipeImageUrl.value = ''; 

        // Create BOX and append the input values
        // Create elements 
        let content = document.getElementById('content');
        content.id = 'content';

        let box = document.createElement('div');
        box.classList.add('box');
        let image = document.createElement('img');
        image.id = 'recipeImg';
        image.src = newRecipeImageUrl;

        let boxDetails = document.createElement('div');
        boxDetails.classList.add('boxDetails');

        let recipeNameShow = document.createElement('input');
        recipeNameShow.classList.add('fntColor');
        recipeNameShow.id = 'recipeNameShow';
        recipeNameShow.maxLength = 20;
        recipeNameShow.value = newRecipeName;

        let recipeDescShow = document.createElement('input');
        recipeDescShow.classList.add('fntColor');
        recipeDescShow.id = 'recipeDescShow';
        recipeDescShow.maxLength = 30;
        recipeDescShow.value = newRecipeDescription;

        let br = document.createElement('br');

        let viewRecipe = document.createElement('viewRecipe');
        viewRecipe.innerText = 'View Recipe';
        viewRecipe.classList.add('btn')
        viewRecipe.id = 'viewRecipe';
        viewRecipe.onclick = function(){
            viewRecipeModal(newRecipeName);
        }

        content.appendChild(box);
        box.appendChild(image);
        box.appendChild(boxDetails);
        boxDetails.appendChild(recipeNameShow);
        boxDetails.appendChild(recipeDescShow);
        boxDetails.appendChild(br);
        boxDetails.appendChild(viewRecipe);

        modal.style.display = "none";  
        h3.classList.remove();

}       

function sameNameRecipe(newRecipeName){
    return recipes.some(recipe => recipe.name === newRecipeName);
}

function viewRecipeModal(newRecipeName){
    // Create Modal
    showModal.style.display = "block";
    let ShowFRM = document.getElementById('showFrm');
    ShowFRM.id = 'showFrm';
    ShowFRM.classList.add('modal-body2');
    let currentRecipe = null;
    for(let i = 0; i < recipes.length; i++){
        if (newRecipeName == recipes[i].name) {
            currentRecipe = recipes[i];
            break;
        }
    }
    let ViewName = document.createElement('p');
    ViewName.classList.add('Capitalize','extraFont');
    ViewName.classList.add('fntColor');
    ViewName.innerText = `Name ${currentRecipe.name}`;

    let ViewRecipeType = document.createElement('p');
    ViewRecipeType.classList.add('Capitalize','fntColor','extraFont');
    ViewRecipeType.innerText = `Type:${currentRecipe.type}`;

    let ViewRecipeDescription = document.createElement('p');
    ViewRecipeDescription.classList.add('Capitalize','fntColor','extraFont');
    ViewRecipeDescription.innerText = `Description:     ${currentRecipe.description}`;

    let ViewRecipeDirections = document.createElement('p');
    ViewRecipeDirections.classList.add('Capitalize','fntColor','extraFont');
    ViewRecipeDirections.innerText = `Directions:     ${currentRecipe.directions}`;

    let ViewRecipeImageUrl = document.createElement('img');
    ViewRecipeImageUrl.classList.add('ElementImg');
    ViewRecipeImageUrl.src = currentRecipe.imageUrl;
    let Brake = document.createElement('br');

    let closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close Recipe';
    closeBtn.classList.add('btn');
    closeBtn.id = 'btn';
    closeBtn.onclick = closeW;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete Recipe';
    deleteBtn.classList.add('btn', 'mg', 'bg');
    deleteBtn.onclick = function(){
        for(let i = 0; i < recipes.length; i++){
            if (newRecipeName == recipes[i].name) {
                recipes.splice(i);   
                closeW() ;
            }
        }
        let clearContent = document.getElementById('content');
        clearContent.innerHTML = '';
    }
    ShowFRM.innerHTML='';

    ShowFRM.appendChild(ViewName);
    ShowFRM.appendChild(ViewRecipeType);
    ShowFRM.appendChild(ViewRecipeDescription);
    ShowFRM.appendChild(ViewRecipeDirections);
    ShowFRM.appendChild(ViewRecipeImageUrl);
    ShowFRM.appendChild(Brake);
    ShowFRM.appendChild(closeBtn);
    ShowFRM.appendChild(deleteBtn);




}


function closeW(){
    let M = document.getElementById('ShowMyModal');
    M.style.display= 'none';
    showModal.style.display = "none";
}