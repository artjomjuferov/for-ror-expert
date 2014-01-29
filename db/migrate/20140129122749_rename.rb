class Rename < ActiveRecord::Migration
  def change
    rename_column :designers, :date_id, :date_meet_id
  end 
end
