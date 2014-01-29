class UsersController < ApplicationController
  def new 
    @user = User.new
    @designers = Designer.all
    @dateMeets = DateMeet.where("date >= ?",Date.today).where("date <= ?", Date.today+3.days).all
  end

  def index
    @users = User.all
  end
end
