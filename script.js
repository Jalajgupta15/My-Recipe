async function fetchRecipe(dishName) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);
    const data = await response.json();
    return data.meals;
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const dishName = document.getElementById('dishInput').value;
    const recipes = await fetchRecipe(dishName);
    displayRecipes(recipes);
});

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (recipes) {
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <h3>${recipe.strMeal}</h3>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="width:100%;border-radius:5px;">
                <p><a href="${recipe.strSource}" target="_blank">View Recipe</a></p>
            `;
            resultsDiv.appendChild(recipeElement);
        });
    } else {
        resultsDiv.innerHTML = '<p>No recipes found. Please try a different dish name.</p>';
    }
}
