class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, :password, presence: :true

  has_secure_password

  has_many :friend_request_as_requestor,
           foreign_key: :requestor_id,
           class_name: :FriendRequest

  has_many :friend_request_as_reciever,
           foreign_key: :reciever_id,
           class_name: :FriendRequest

  has_many :friendships_as_friend_a,
           foreign_key: :friend_a,
           class_name: :Friendship

  has_many :friendships_as_friend_b,
           foreign_key: :friend_b,
           class_name: :Friendship

    has_many :hangouts 
    has_many :events, through: :hangouts

  # has_many :friendships,
  #          ->(user) { where(friend_a_id = user.id || friend_b_id = user.id) }
  # has_many :friends, through: :friendships
end
