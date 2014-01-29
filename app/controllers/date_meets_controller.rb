class DateMeetsController < ApplicationController
   def index
    @designers = Designer.all
  end

  def new
    @date_meet = DateMeet.new
    if params[:designer] == nil or Designer.find(params[:designer]) == nil  
      redirect_to(:action => 'index')
    else
      @date_meet.designer = Designer.find(params[:designer])
      @date_meets = DateMeet.where(:designer_id => params[:designer])
       respond_to do |format|
        format.html
        format.json{
          render :json => @date_meets.to_json
        }
      end
    end
  end

  def create
    @date_meet = DateMeet.new(params[:date_meet])
    if @date_meet.save
      flash[:notice] = "DateMeets successfully created"
      redirect_to(:action => 'new', :designer => @date_meet.designer_id)
    else 

      flash[:notice] = "DateMeets wasn't successfully created"
      redirect_to 'new'#, :designer => @date_meet.designer_id, :notice => "bad"
    end
  end

end
