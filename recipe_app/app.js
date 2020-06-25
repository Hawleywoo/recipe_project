const searchParams = new URLSearchParams(window.location.search)
let searchName = searchParams.get("name")
let searchID = searchParams.get("id")

const baseURL = "http://localhost:3000";
let recipesURL = `${baseURL}/recipes`
let usersURL = `${baseURL}/users`

if (searchName){
    recipesURL =`${recipesURL}?name=${searchName}`
}

const mainElement = document.querySelector('#displayed')

// Let's wrap these fetches in functions to call for clarity and organization purposes
// I'll do this first one as an example

function fetchRecipes() {
    return fetch(recipesURL)
      .then(response => response.json())
      .catch(error => {
          throw new Error(error);
      });
}

function handleFetchRecipesSuccess(recipes) {
    displayRecipe(recipes);
}

function handleFetchRecipesFailure(error) {
    //displayErrorInUI?(error);
}

// Separating handling success and failure from the initial call (on line 21) lets
// us call fetchRecipes() again at anytime and do different things with the results
// which makes it more composable
fetchRecipes()
  .then(handleFetchRecipesSuccess)
  .catch(handleFetchRecipesFailure);

// Try doing the above with this functionality as well.
fetch(usersURL)
  .then(response => {
      return response.json()
  }).then(users =>{
    displayUsers(users);
})

function displayRecipe(recipes){
    console.log(recipes);
    if(searchID){
        recipes.map(recipe =>{
            // recipe.users.id isn't a property on recipe
            // We have recipe.id which I think is the id of the recipe and
            // we have recipe.users which is an array of objects and those
            // objects have an id property which I think is what we're trying
            // to match here.
            // I think I see this is where your troubles of many-to-many are.
            // Are recipes supposed to have more than one user attached though?
            // Seems like there should just be one user per recipe (so not many-to-many)
            if(recipe.users.id == searchID){
                console.log('This will never run');
                let recipeHeading = document.createElement('h2')
                recipeHeading.classList = "display-recipe"
                recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
                mainElement.append(recipeHeading)
            }
        })
    }else{
        // Our aim here is to create a list of recipes so that's what we should do
        // Create a ul element that get's li elements appended to it
        // So the ul element is created *outside* of the map, and each li is created inside the map
        // and appended to the ul
        recipes.map(recipe =>{
            let recipeHeading = document.createElement('h2') // So this should be an li since it represents and item in the list
            recipeHeading.classList = "display-recipe"
            recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
            mainElement.append(recipeHeading) // Append to ul element created outside of map
        })
        //Then we can finally append the ul to mainElement
    }
}
// Can just move this inside displayUsers since it's the only place it's used
// Makes the code cleaner and other devs won't need to figure out if it is used somewhere else
const dropdown = document.querySelector("select")

function displayUsers(users){
    users.map( user =>{
        let userOption = document.createElement('option')
        userOption.value = user.id
        userOption.innerText = `${user.name}`
        dropdown.append(userOption)
    })
}

function displayUserRecipe(recipes){
    recipes.map(recipe =>{
        let recipeHeading = document.createElement('h2')
        recipeHeading.classList = "display-recipe"
        recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
        mainElement.append(recipeHeading)
    })
}
