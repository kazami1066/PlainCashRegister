class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
    @category = Category.new
    @item = Item.new(item_params) #データを新規登録するためのインスタンス生成
    if @item.save #データをデータベースに保存するためのsaveメソッド実行
      redirect_to root_path #トップ画面へリダイレクト
    else 
      render :new
    end
  end

  private
  def item_params #ストロングパラメータ
    params.require(:item).permit(:item_name, :price).merge(category_id: @category.id) #パラメーターのキー
  end
end