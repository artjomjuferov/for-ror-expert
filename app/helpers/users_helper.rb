module UsersHelper

  def create_time(date_meet) 
    html = ""
    (8..22).each do |time|
      if 
        html += "</br>" + radio_button(:user, :time, :"#{time}")
        html += "#{time}.00"
       end
    end
    return html.html_safe
  end

end
