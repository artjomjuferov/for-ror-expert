class RemoveALotOfColumnsFromDateMeets < ActiveRecord::Migration
  def change
    (1..24).each do |time|
      remove_column :date_meets, :":time_#{time}"
    end
  end
end
