class CreateMagicianCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :magician_categories do |t|
      t.references :magician, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
