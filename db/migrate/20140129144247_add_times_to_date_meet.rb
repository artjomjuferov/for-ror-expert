class AddTimesToDateMeet < ActiveRecord::Migration
  def change
    (1..24).each do |time|
      add_column :date_meets, :"time_#{time}", :boolean
    end
  end
end
