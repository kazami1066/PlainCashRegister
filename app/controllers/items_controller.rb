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
      binding.pry
      redirect_to root_path #トップ画面へリダイレクト
    else 
      render :new
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to root_path
  end

  private
  def item_params #ストロングパラメータ
    params.require(:item).permit(:item_name, :price, :category_id)#パラメーターのキー
  end
end