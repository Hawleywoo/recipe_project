const searchParams = new URLSearchParams(window.location.search)
let searchId = searchParams.get("id")

fetch(`http://localhost:3000/recipes/${searchId}`)
    .then(response => response.json())
    .then(recipe => handleRecipe(recipe))

    const main = document.querySelector("main")
    const deleteForm = document.querySelector('#delete-form')

    function handleRecipe(recipe){
        const recipeHeading = document.createElement("h2")
        recipeHeading.innerText = recipe.name

        const recipeIngredients = document.createElement("p")
        recipeIngredients.innerText = recipe.ingredient
        
        const recipeInstructions = document.createElement("p")
        recipeInstructions.innerText = recipe.instructions
        
        
        deleteForm.action = `http://localhost:3000/recipes/${searchId}`

        main.prepend(recipeHeading, recipeIngredients, recipeInstructions)
    }