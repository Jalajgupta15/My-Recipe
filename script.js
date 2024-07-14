const apiKey = '87a614b4d79b40b4b95babd76e33093c';

async function fetchRecipe(dishName) {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${dishName}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.results;
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const dishName = document.getElementById('dishInput').value;
    const recipes = await fetchRecipe(dishName);
    displayRecipes(recipes);
});

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `<h3>${recipe.title}</h3><img src="${recipe.image}" alt="${recipe.title}" style="width:100%;border-radius:5px;"><p><a href="https://spoonacular.com/recipes/${recipe.id}" target="_blank">View Recipe</a></p>`;
        resultsDiv.appendChild(recipeElement);
    });
}
