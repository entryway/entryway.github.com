class Pages < Application
  # provides :xml, :yaml, :js

  def index
    @pages = Page.all
    display @pages
  end

  def social_responsiblity 
    
  end

end # Pages
