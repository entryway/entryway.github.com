module Merb
  module GlobalHelpers 
    
    def default_sidebar
      throw_content :sidebar do 
        partial('layout/default_sidebar')
      end
    end
    
  end
end
