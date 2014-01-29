class AddDesignerIdToDateMeet < ActiveRecord::Migration
  def change
    add_column :date_meets, :designer_id, :integer
  end
end
