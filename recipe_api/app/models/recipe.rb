class Recipe < ApplicationRecord
    has_many :favorite_recipes
    has_many :user, through: :favorite_recipes 
end
