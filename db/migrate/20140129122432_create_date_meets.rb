class CreateDateMeets < ActiveRecord::Migration
  def change
    create_table :date_meets do |t|
      t.datetime :date
      t.integer :time_id

      t.timestamps
    end
  end
end
