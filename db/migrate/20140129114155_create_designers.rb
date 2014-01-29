class CreateDesigners < ActiveRecord::Migration
  def change
    create_table :designers do |t|
      t.string :name
      t.integer :date_id

      t.timestamps
    end
  end
end
