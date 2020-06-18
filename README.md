# The Recipe Locker

## Table of Contents

- [](#)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Intro Video](#intro-video)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General Info

The Recipe Locker is a full-stack application made with Ruby on Rails, HTML, CSS, and Javascript that allows users to search for recipes, view recipes, and delete recipes.

## Intro Video

[Mod 2 Flatiron Project by Andrew Hawley and Lynn Amsbury](video to come)

## Technologies

* Ruby - version 2.6.1
* Rails - 6.0.3.1
* SQLite3 - version 1.4

## Setup

To run this project, clone the GitHub repository, install it locally, cd into recipe_api, and type:
```bundle install```into your terminal. Next run ```bundle install```, then ```rails db:create```, and ```rails db:seed```. Finally, run ```rails s -p3000``` to start the backend server.
Next, open a new terminal window and cd into recipe_app and type
```lite-server -p3001```into the terminal. If you do not have lite-server installed you will need to install it.

## Code Examples

```JavaScript
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
```

## Features

* Allows users to search for a recipe based on a keyword
* Allows users to view recipes
* Creates new recipes
* Allows users to delete recipes

## To-do List

* Refactor “code smell”
* Add functionality to update a recipe
* Including a separate table for recipe ingredients
* Including user-login functionality

## Status

Project is finished with option to expand functionality and DRY out code.

## Inspiration

We love food!

## Contact

Created by [Andrew Hawley](https://www.linkedin.com/in/andrew-hawley-695299182/) and [Lynn Amsbury](https://www.linkedin.com/in/lynnamsbury/)

Feel free to contact us!