class UsersController < ApplicationController
  def new 
    @user = User.new
    @designers = Designer.all
    @date_meets = DateMeet.where("date >= ?",Date.today).where("date < ?", (Date.today+2.days)).all
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "successfully created "
      redirect_to(:action => 'index')
    else 
      flash[:notice] = "wasn't successfully created"
      redirect_to(:action => 'index')
    end
  end
end
