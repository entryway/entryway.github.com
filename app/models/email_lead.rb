class EmailLead
  include DataMapper::Resource
  
  property :id, Serial

  property :name, String
  property :ip, String
  property :request, Text
  property :email, String

end
