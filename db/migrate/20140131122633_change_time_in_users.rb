class ChangeTimeInUsers < ActiveRecord::Migration
  def change
    remove_column :users, :time
    add_column :users, :time, :integer
  end
end
