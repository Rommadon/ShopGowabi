require 'faker'

Shop.destroy_all()
Category.destroy_all()

category1 = Category.create(name: "Spa and massage")
category2 = Category.create(name: "Nails")
category3 = Category.create(name: "Hair removal")
category4 = Category.create(name: "Barbershop")

250.times do
  category1.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.6000, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.7018)})
end

250.times do
  category2.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.6000, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.7018)})
end

250.times do
  category3.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.6000, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.7018)})
end

250.times do
  category4.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.6000, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.7018)})
end
