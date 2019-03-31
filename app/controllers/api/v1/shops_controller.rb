module Api
  module V1
    class ShopsController < ApplicationController
      def index
        render json: {
          'SpaAndMassage': Category.find_by_name('Spa and massage').shops,
          'Nails': Category.find_by_name('Nails').shops,
          'HairRemoval': Category.find_by_name('Hair removal').shops,
          'Barbershop': Category.find_by_name('Barbershop').shops,
        } , status: 200
      end
    end
  end
end