require File.join(File.dirname(__FILE__), '..', 'spec_helper.rb')

given "a email_lead exists" do
  EmailLead.all.destroy!
  request(resource(:email_leads), :method => "POST", 
    :params => { :email_lead => { :id => nil }})
end

describe "resource(:email_leads)" do
  describe "GET" do
    
    before(:each) do
      @response = request(resource(:email_leads))
    end
    
    it "responds successfully" do
      @response.should be_successful
    end

    it "contains a list of email_leads" do
      pending
      @response.should have_xpath("//ul")
    end
    
  end
  
  describe "GET", :given => "a email_lead exists" do
    before(:each) do
      @response = request(resource(:email_leads))
    end
    
    it "has a list of email_leads" do
      pending
      @response.should have_xpath("//ul/li")
    end
  end
  
  describe "a successful POST" do
    before(:each) do
      EmailLead.all.destroy!
      @response = request(resource(:email_leads), :method => "POST", 
        :params => { :email_lead => { :id => nil }})
    end
    
    it "redirects to resource(:email_leads)" do
      @response.should redirect_to(resource(EmailLead.first), :message => {:notice => "email_lead was successfully created"})
    end
    
  end
end

describe "resource(@email_lead)" do 
  describe "a successful DELETE", :given => "a email_lead exists" do
     before(:each) do
       @response = request(resource(EmailLead.first), :method => "DELETE")
     end

     it "should redirect to the index action" do
       @response.should redirect_to(resource(:email_leads))
     end

   end
end

describe "resource(:email_leads, :new)" do
  before(:each) do
    @response = request(resource(:email_leads, :new))
  end
  
  it "responds successfully" do
    @response.should be_successful
  end
end

describe "resource(@email_lead, :edit)", :given => "a email_lead exists" do
  before(:each) do
    @response = request(resource(EmailLead.first, :edit))
  end
  
  it "responds successfully" do
    @response.should be_successful
  end
end

describe "resource(@email_lead)", :given => "a email_lead exists" do
  
  describe "GET" do
    before(:each) do
      @response = request(resource(EmailLead.first))
    end
  
    it "responds successfully" do
      @response.should be_successful
    end
  end
  
  describe "PUT" do
    before(:each) do
      @email_lead = EmailLead.first
      @response = request(resource(@email_lead), :method => "PUT", 
        :params => { :email_lead => {:id => @email_lead.id} })
    end
  
    it "redirect to the article show action" do
      @response.should redirect_to(resource(@email_lead))
    end
  end
  
end

