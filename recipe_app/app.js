const searchParams = new URLSearchParams(window.location.search)
let searchName = searchParams.get("name")

const baseURL = "http://localhost:3000";
let recipesURL = `${baseURL}/recipes`

if (searchName){
    recipesURL =`${recipesURL}?name=${searchName}`
}

const mainElement = document.querySelector('#displayed')

fetch(recipesURL)
    .then(response => {
        return response.json()
    }).then( recipes =>{
        displayRecipe(recipes);
    })

function displayRecipe(recipes){
    recipes.map(recipe =>{
        let recipeHeading = document.createElement('h2')
        recipeHeading.classList = "display-recipe"
        recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
        mainElement.append(recipeHeading)
    })
}