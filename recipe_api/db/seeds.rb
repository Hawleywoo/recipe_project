# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
FavoriteRecipe.destroy_all
User.destroy_all
Recipe.destroy_all

sugar_cookie = Recipe.create(name:"Sugar Cookie", ingredient:
    "1 Egg, 
    2 ¾ cups all-purpose flour, 
    1 teaspoon baking soda, 
    ½ teaspoon baking powder,
    1 cup butter softened,
    1 ½ cups white sugar,
    1 teaspoon vanilla extract", 
    instructions:
    "Preheat oven to 375 degrees F (190 degrees C). 
    In a small bowl, stir together flour, baking soda, and baking powder. 
    Set aside. 
    In a large bowl, cream together the butter and sugar until smooth. 
    Beat in egg and vanilla. 
    Gradually blend in the dry ingredients. 
    Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.
    Bake 8 to 10 minutes in the preheated oven, or until golden. 
    Let stand on cookie sheet two minutes before removing to cool on wire racks.")
chocolate_chip_cookie = Recipe.create(name:"Chocolate Chip Cookies", 
    ingredient:
    "1 cup butter softened,
    1 cup white sugar,
    1 cup packed brown sugar,
    2 eggs,
    2 teaspoons vanilla extract,
    1 teaspoon baking soda,
    2 teaspoons hot water,
    1/2 teaspoon salt,
    3 cups all-purpose flour,
    2 cups semisweet chocolate chips,", 
    instructions: 
    "Preheat oven to 350 degrees F.
    Cream together the butter, white sugar, and brown sugar until smooth.
    Beat in the eggs one at a time, then stir in the vanilla.
    Dissolve baking soda in hot water. Add to batter along with salt.
    Stir in flour, chocolate chips, and nuts.
    Drop by large spoonfuls onto ungreased pans.
    Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.")
brownie = Recipe.create(name:"Brownies", 
    ingredient:
    "½ cup butter,
    1 cup white sugar,
    2 eggs,
    1 teaspoon vanilla extract,
    ⅓ cup unsweetened cocoa powder,
    ½ cup all-purpose flour,
    ¼ teaspoon salt,
    ", instructions:
    "Preheat oven to 350 degrees F (175 degrees C). 
    Grease and flour an 8-inch square pan.
    In a large saucepan, melt 1/2 cup butter. 
    Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. 
    Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. 
    Spread batter into prepared pan.
    Bake in preheated oven for 25 to 30 minutes. Do not overcook.")


andrew = User.create(name: "Andrew")
lynn = User.create(name: 'Lynn')

FavoriteRecipe.create(recipe: chocolate_chip_cookie,user: lynn)
FavoriteRecipe.create(recipe: sugar_cookie,user: lynn)
FavoriteRecipe.create(recipe: brownie,user: andrew)
FavoriteRecipe.create(recipe: brownie,user: lynn)
FavoriteRecipe.create(recipe: sugar_cookie,user: andrew)
