class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :username,
             :first_name,
             :last_name,
             :email,
             :password,
             :password_confirmation

  has_many :friend_request_as_reciever
  has_many :friend_request_as_requestor
  has_many :friendships_as_friend_a
  has_many :friendships_as_friend_b
  has_many :hangouts
end
