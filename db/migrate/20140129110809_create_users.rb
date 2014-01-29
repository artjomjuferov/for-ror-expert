class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :designer_id
      t.datetime :time
      t.string :place
      t.string :surname
      t.string :name
      t.string :dad_name
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
