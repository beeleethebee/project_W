class Category < ApplicationRecord
  has_many :magician_categories, dependent: :destroy
  has_many :magicians, through: :magician_categories
  has_many :appointment_categories, dependent: :destroy
  has_many :appointments, through: :appointment_categories

  def self.complete_json
    all.as_json(except: %i[created_at updated_at])
  end
end
