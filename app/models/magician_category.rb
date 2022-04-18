# frozen_string_literal: true

class MagicianCategory < ApplicationRecord
  belongs_to :magician
  belongs_to :category
end
