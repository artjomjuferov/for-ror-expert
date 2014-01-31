class DesignersController < ApplicationController
   def new 
    @designer = Designer.new
  end

  def index
    @designers = Designer.all
  end

  def create
    @designer = Designer.new(params[:designer])
    if @designer.save
      redirect_to 'new'
    end
  end

  def destroy
    if Designer.find(params[:id]).destroy
      flash[:notice] = "successfully deleted "
      redirect_to(:action => "index")
    else
      flash[:notice] = "unsuccessfully deleted "
      redirect_to(:action => "index")
    end
  end


end
