class Event < ApplicationRecord
    belongs_to :owner, class_name: :User
    
    has_many :hangouts 
    has_many :users, through: :hangouts
end
