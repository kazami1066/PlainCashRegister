class Item < ApplicationRecord
  validates :item_name,       presence:true
  validates :price,           presence:true
  validates :sales_start_date
  validates :sales_end_date
end