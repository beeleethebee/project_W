# frozen_string_literal: true

class Magician < ApplicationRecord
  has_many :magician_categories, dependent: :destroy
  has_many :categories, through: :magician_categories
  has_many :appointments, dependent: :destroy

  def self.complete_json
    all.as_json(except: %i[created_at updated_at])
  end
end
