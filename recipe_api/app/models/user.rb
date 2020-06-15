class User < ApplicationRecord
    has_many :favorite_recipes
    has_many :recipes, through: :favorite_recipes 
end
