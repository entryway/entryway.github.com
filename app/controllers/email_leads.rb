class EmailLeads < Application
  # provides :xml, :yaml, :js

  def index
    @email_leads = EmailLead.all
    display @email_leads
  end

  def show(id)
    @email_lead = EmailLead.get(id)
    raise NotFound unless @email_lead
    display @email_lead
  end

  def new
    only_provides :html
    @email_lead = EmailLead.new
    display @email_lead
  end

  def edit(id)
    only_provides :html
    @email_lead = EmailLead.get(id)
    raise NotFound unless @email_lead
    display @email_lead
  end

  def create(email_lead)
    @email_lead = EmailLead.new(email_lead)
    if @email_lead.save
      redirect resource(@email_lead), :message => {:notice => "EmailLead was successfully created"}
    else
      message[:error] = "EmailLead failed to be created"
      render :new
    end
  end

  def update(id, email_lead)
    @email_lead = EmailLead.get(id)
    raise NotFound unless @email_lead
    if @email_lead.update_attributes(email_lead)
       redirect resource(@email_lead)
    else
      display @email_lead, :edit
    end
  end

  def destroy(id)
    @email_lead = EmailLead.get(id)
    raise NotFound unless @email_lead
    if @email_lead.destroy
      redirect resource(:email_leads)
    else
      raise InternalServerError
    end
  end

end # EmailLeads
