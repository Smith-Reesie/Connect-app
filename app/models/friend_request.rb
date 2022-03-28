class FriendRequest < ApplicationRecord
  belongs_to :requestor, class_name: :User
  belongs_to :reciever, class_name: :User
end
