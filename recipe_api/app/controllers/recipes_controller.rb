class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes
    end
    
    def create
        Recipe.create(
            name: params[:name],
            ingredient: params[:ingredient],
            instructions: params[:instructions]
        )

        redirect_to "http://localhost:3001/"
    end
end
