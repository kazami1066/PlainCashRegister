class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params) #データを新規登録するためのインスタンス生成
    if @category.save #データをデータベースに保存するためのsaveメソッド実行
      redirect_to root_path #トップ画面へリダイレクト
    else 
      render :new
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    redirect_to root_path
  end
  
  private
  def category_params #ストロングパラメータ
    params.require(:category).permit(:category_name) #パラメーターのキー
  end
end

