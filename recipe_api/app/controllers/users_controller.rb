class UsersController < ApplicationController

    def index
        # @users = User.all
        # render json: @users, include: [:recipes]
        if params["id"]
            @users = User.where(id: params["id"])
            render json: @users, include: [:recipes] 
        else
            @users = User.all
            render json: @users, include: [:recipes]
        end
    end
end
