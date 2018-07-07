class Dbchosei < ActiveRecord::Migration
  def change
    drop_table :prototype_categories
    drop_table :categories
  end
end
