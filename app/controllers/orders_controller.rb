class OrdersController < ApplicationController
  def index
    @categories = Category.all
    @items = Item.all
  end

end
