class User < ActiveRecord::Base
  attr_accessible :dad_name, :designer_id, :email, :name, :phone, :place, :surname, :time
  belongs_to :designer
end
