category1 = Category.create(name: "Spa and massage")
category2 = Category.create(name: "Nails")
category3 = Category.create(name: "Hair removal")
category4 = Category.create(name: "Barbershop")

shops1 = [
  Shop.create(name:'Home1'),
  Shop.create(name:'Work1')
]

shops2 = [
  Shop.create(name:'Home2'),
  Shop.create(name:'Work2')
]

shops3 = [
  Shop.create(name:'Home3'),
  Shop.create(name:'Work3')
]

shops4 = [
  Shop.create(name:'Home4'),
  Shop.create(name:'Work4')
]

category1.shops << shops1.sample
category2.shops << shops2.sample
category3.shops << shops3.sample
category4.shops << shops4.sample



