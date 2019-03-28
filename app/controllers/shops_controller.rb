class ShopsController < ApplicationController
  before_action :set_shop, only: [:show, :edit, :update, :destroy]
  
  def index
    @shops_category_spa = Category.find_by_name('Spa and massage').shops
    @shops_category_nails = Category.find_by_name('Nails').shops
    @shops_category_hair = Category.find_by_name('Hair removal').shops
    @shops_category_baber = Category.find_by_name('Barbershop').shops
  end
end
