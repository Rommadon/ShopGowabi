class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.decimal :latitude
      t.decimal :longitude
      t.belongs_to :category, index: true

      t.timestamps
    end
  end
end
