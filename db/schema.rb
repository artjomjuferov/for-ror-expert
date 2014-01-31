# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140130202028) do

  create_table "date_meets", :force => true do |t|
    t.datetime "date"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.boolean  ":time_1"
    t.boolean  ":time_2"
    t.boolean  ":time_3"
    t.boolean  ":time_4"
    t.boolean  ":time_5"
    t.boolean  ":time_6"
    t.boolean  ":time_7"
    t.boolean  ":time_8"
    t.boolean  ":time_9"
    t.boolean  ":time_10"
    t.boolean  ":time_11"
    t.boolean  ":time_12"
    t.boolean  ":time_13"
    t.boolean  ":time_14"
    t.boolean  ":time_15"
    t.boolean  ":time_16"
    t.boolean  ":time_17"
    t.boolean  ":time_18"
    t.boolean  ":time_19"
    t.boolean  ":time_20"
    t.boolean  ":time_21"
    t.boolean  ":time_22"
    t.boolean  ":time_23"
    t.boolean  ":time_24"
    t.boolean  "time_1"
    t.boolean  "time_2"
    t.boolean  "time_3"
    t.boolean  "time_4"
    t.boolean  "time_5"
    t.boolean  "time_6"
    t.boolean  "time_7"
    t.boolean  "time_8"
    t.boolean  "time_9"
    t.boolean  "time_10"
    t.boolean  "time_11"
    t.boolean  "time_12"
    t.boolean  "time_13"
    t.boolean  "time_14"
    t.boolean  "time_15"
    t.boolean  "time_16"
    t.boolean  "time_17"
    t.boolean  "time_18"
    t.boolean  "time_19"
    t.boolean  "time_20"
    t.boolean  "time_21"
    t.boolean  "time_22"
    t.boolean  "time_23"
    t.boolean  "time_24"
    t.integer  "designer_id"
  end

  create_table "designers", :force => true do |t|
    t.string   "name"
    t.integer  "date_meet_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "events", :force => true do |t|
    t.string   "name"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.integer  "designer_id"
    t.datetime "time"
    t.string   "place"
    t.string   "surname"
    t.string   "name"
    t.string   "dad_name"
    t.string   "phone"
    t.string   "email"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.date     "date"
  end

end
