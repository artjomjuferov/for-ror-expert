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


end
