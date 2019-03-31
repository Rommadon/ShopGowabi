FactoryBot.define do
  factory :category do
    trait :spa do
      name { 'Spa and massage' }
    end
    trait :nail do
      name { 'Nails' }
    end
    trait :hair do
      name { 'Hair removal' }
    end
    trait :barber do
      name { 'Barbershop' }
    end
  end
end