class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :reciever_id, :requestor_id, :status
  belongs_to :requestor
  belongs_to :reciever
end
