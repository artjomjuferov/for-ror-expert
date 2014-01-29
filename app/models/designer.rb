class Designer < ActiveRecord::Base
  attr_accessible :name
  has_many :date_meets, dependent: :destroy
  has_many :users

end
