class OrdersController < ApplicationController
  def index
    @categories = Category.all
  end

end
