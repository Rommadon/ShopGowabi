FactoryBot.define do
  factory :shop do
    name { Faker::Company.name }
    latitude { Faker::Number.between(from = 13.6000, to = 13.8563) }
    longitude { Faker::Number.between(from = 100.5018, to = 100.7018) }
  end
end