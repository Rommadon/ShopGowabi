require 'rails_helper'

# Test suite for the Shop model
RSpec.describe Shop, type: :model do
  it { should belong_to(:category) }
end