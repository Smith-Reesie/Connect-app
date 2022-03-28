class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :time, :date, :price

  has_many :hangouts
end
