class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name
   def id
     object._id
   end 
end
