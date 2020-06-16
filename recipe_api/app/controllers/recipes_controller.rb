class RecipesController < ApplicationController
    def index
        if params["name"]
            @recipes = Recipe.where("name LIKE ?","%#{params["name"]}%")
            render json: @recipes
        else
            @recipes = Recipe.all
            render json: @recipes
        end
    end

    # def show
    #     if params["name"]
    #         @recipes = Recipe.where("name LIKE ?","%#{params["name"]}%")
    #         render json: @recipes
    #     else
    #         @recipes = Recipe.all
    #         render json: @recipes
    #     end
    # end
    
    def create
        Recipe.create(
            name: params[:name],
            ingredient: params[:ingredient],
            instructions: params[:instructions]
        )
        redirect_to "http://localhost:3001/"
    end
end
