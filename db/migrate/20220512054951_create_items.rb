class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string     :item_name,        null: false
      t.integer    :price,            null: false
      t.date       :sales_start_date
      t.date       :sales_end_date
      t.references :category,         foreign_key: true
      t.timestamps
    end
  end
end