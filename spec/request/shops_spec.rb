require 'rails_helper'

RSpec.describe 'Shops API', :type => :request do
  # Initialize the test data
  let!(:category_1) { create(:category, :spa) }
  let!(:shops_1) { create_list(:shop, 20, category_id: category_1.id) }
  let!(:category_2) { create(:category, :nail) }
  let!(:shops_2) { create_list(:shop, 20, category_id: category_2.id) }
  let!(:category_3) { create(:category, :hair) }
  let!(:shops_3) { create_list(:shop, 20, category_id: category_3.id) }
  let!(:category_4) { create(:category, :barber) }
  let!(:shops_4) { create_list(:shop, 20, category_id: category_4.id) }

  describe 'GET /api/v1/shops' do
    before { get "/api/v1/shops" }

    context 'when todo exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all todo items' do
        expect(json.size).to eq(4)
      end
    end
  end
end