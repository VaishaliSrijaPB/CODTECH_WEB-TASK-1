document.getElementById('recipeForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    var recipeName = document.getElementById('recipeName').value;
    var recipeInstructions = document.getElementById('recipeInstructions').value;
    addRecipe(recipeName, recipeInstructions);
    document.getElementById('recipeForm').reset();
});
function addRecipe(name, instructions) {
    var recipeList = document.getElementById('recipeList');
    var li = document.createElement('li');
    li.textContent = name + ': ' + instructions;
    recipeList.appendChild(li);
    saveRecipe(name, instructions);
}
function saveRecipe(name, instructions) {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push({ name: name, instructions: instructions });
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
function loadRecipes() {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.forEach(function(recipe) 
    {
        addRecipe(recipe.name, recipe.instructions);
    });
}
window.onload = loadRecipes;
