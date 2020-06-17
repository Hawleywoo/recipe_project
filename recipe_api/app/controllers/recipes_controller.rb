class RecipesController < ApplicationController
    before_action :find_recipe, only: [:show, :update, :destroy]
    
    def index
        if params["name"]
            @recipes = Recipe.where("name LIKE ?","%#{params["name"]}%")
            render json: @recipes
        else
            @recipes = Recipe.all
            render json: @recipes
        end
    end

    def show
        render json: @recipe
    end
    
    def create
        Recipe.create(
            name: params[:name],
            ingredient: params[:ingredient],
            instructions: params[:instructions]
        )
        redirect_to "http://localhost:3001/"
    end

    def update 
        @recipe.update()
    end

    def destroy
        @recipe.destroy
        redirect_to "http://localhost:3001"
    end

    private

    def find_recipe
        @recipe = Recipe.find(params[:id ])
    end

    def allowed_params
        params.permit(:name,)
    end
end
