class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :magician

  has_many :appointment_categories, dependent: :destroy
  has_many :categories, through: :appointment_categories
end
