const appId = 'ce65fad0';
const appKey = 'bce0c5427ef90a795cf10c058fb4c0c6';

async function fetchRecipe(dishName) {
    const response = await fetch(`https://api.edamam.com/search?q=${dishName}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    return data.hits;
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const dishName = document.getElementById('dishInput').value;
    const recipes = await fetchRecipe(dishName);
    displayRecipes(recipes);
});

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3>${recipe.label}</h3>
            <img src="${recipe.image}" alt="${recipe.label}" style="width:100%;border-radius:5px;">
            <p><a href="${recipe.url}" target="_blank">View Recipe</a></p>
        `;
        resultsDiv.appendChild(recipeElement);
    });
}
