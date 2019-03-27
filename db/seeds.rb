require 'faker'

Shop.destroy_all()
Category.destroy_all()

category1 = Category.create(name: "Spa and massage")
category2 = Category.create(name: "Nails")
category3 = Category.create(name: "Hair removal")
category4 = Category.create(name: "Barbershop")

250.times do
  category1.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.7563, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.5518)})
end

250.times do
  category2.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.7563, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.5518)})
end

250.times do
  category3.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.7563, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.5518)})
end

250.times do
  category4.shops.create({ "name": Faker::Company.name, "latitude": Faker::Number.between(from = 13.7563, to = 13.8563),"longitude": Faker::Number.between(from = 100.5018, to = 100.5518)})
end

# shops1 = 100.times do
#   Shop.create({ "name": Faker::Company.name, "latitude": Faker::Address.latitude,"longitude": Faker::Address.longitude})
# end

# shops2 = [
#   Shop.create({ "name": "Buckingham Palace", "latitude": "49.501564","longitude": "-0.141944"}),
#   Shop.create({ "name": "Buckingham Palace", "latitude": "51.501564","longitude": "-0.141944"})
# ]

# shops3 = [
#   Shop.create({ "name": "Buckingham Palace", "latitude": "45.501564","longitude": "-0.141944"}),
#   Shop.create({ "name": "Buckingham Palace", "latitude": "51.501564","longitude": "-0.141944"})
# ]

# shops4 = [
#   Shop.create({ "name": "Buckingham Palace", "latitude": "55.501564","longitude": "-0.141944"}),
#   Shop.create({ "name": "Buckingham Palace", "latitude": "51.501564","longitude": "-0.141944"}),
#   Shop.create({ "name": "Buckingdwqdham Palace", "latitude": "55.501564","longitude": "-0.241944"}),
#   Shop.create({ "name": "Buckdwqdqingham Palace", "latitude": "60.501564","longitude": "-0.141944"}),
#   Shop.create({ "name": "Buckidwqdwqngham Palace", "latitude": "75.501564","longitude": "-0.241944"}),

# ]
# category1.shops.create(shops:)
# category2.shops << shops2.sample
# category3.shops << shops3.sample
# category4.shops << shops4.sample



