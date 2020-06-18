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

fetch(recipesURL)
    .then(response => {
        return response.json()
    }).then( recipes =>{
        displayRecipe(recipes);
        consoleUser(recipes);
    })

fetch(usersURL)
    .then(response => {
        return response.json()
    }).then(users =>{
        displayUsers(users);
    })
    
function displayRecipe(recipes){
    if(searchID){
        recipes.map(recipe =>{
            if(recipe.users.id == searchID){
                let recipeHeading = document.createElement('h2')
                recipeHeading.classList = "display-recipe"
                recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
                mainElement.append(recipeHeading)
                }
            })   
    }else{
        recipes.map(recipe =>{
            let recipeHeading = document.createElement('h2')
            recipeHeading.classList = "display-recipe"
            recipeHeading.innerHTML = `<a href="showRecipe.html?id=${recipe.id}">${recipe.name}</a>`
            mainElement.append(recipeHeading)
        })
    }
}
// const dropdown = document.querySelector("select")



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
