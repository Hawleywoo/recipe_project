class Recipe < ApplicationRecord
    has_many :favorite_recipes
    has_many :users, through: :favorite_recipes 
end
