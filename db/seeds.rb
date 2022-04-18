# frozen_string_literal: true

CATEGORIES = [
  { name: 'Anniversaire', price: 99 },
      { name: 'Baby Shower', price: 99 },
      { name: 'Fête surprise', price: 99 },
      { name: 'Entreprise TeamBuilding', price: 99 },
      { name: 'Leçon 1h', price: 99 },
      { name: 'Leçon 2h', price: 99 },
      { name: 'Spectacle unique', price: 99 }
].freeze

MAGICIAN_COUNT = 1_500

puts '🗑 Réinitialisation de la base de donnée...'

MagicianCategory.delete_all
Magician.delete_all
Category.delete_all

puts "🗑 C'est bon y'a plus personne ! ✅\n\n"

puts "🗃 Import des #{CATEGORIES.size} catégories ..."

categories = CATEGORIES.map do |category_data|
  category = Category.new(category_data)
  category
end

Category.import categories, recursive: true

puts "🗃 Catégories importées ✅\n\n"

category_ids = Category.pluck(:id)

puts "🧙‍ Import des #{MAGICIAN_COUNT} magiciens avec les sous-catégories liés (~15 secondes)"

magicians = MAGICIAN_COUNT.times.map do
  magician = Magician.new(first_name: FFaker::NameFR.first_name,
                          last_name: FFaker::NameFR.last_name,
                          address: FFaker::AddressFR.full_address)
  category_ids.sample(rand(0..3)).each do |category_id|
    magician.magician_categories.build(category_id: category_id)
  end
  magician
end

Magician.import magicians, recursive: true

puts "🧙‍ Magiciens importés ✅\n\n"

puts 'Bon bah... on peut y aller maintenant ! 🚀'
