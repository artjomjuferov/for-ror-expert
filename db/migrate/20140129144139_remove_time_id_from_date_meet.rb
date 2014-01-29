class RemoveTimeIdFromDateMeet < ActiveRecord::Migration
  def up
    remove_column :date_meets, :time_id
  end

  def down
    add_column :date_meets, :time_id, :string
  end
end
