class OrdersController < ApplicationController
  def index
    @categories = Category.all
    @items = Item.all
  end

  def new
    # @item = Item.new
  end
end
