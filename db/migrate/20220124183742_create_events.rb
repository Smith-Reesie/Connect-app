class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :location
      t.string :time
      t.string :date
      t.string :price
      t.integer :owner_id

      t.timestamps
    end
  end
end
