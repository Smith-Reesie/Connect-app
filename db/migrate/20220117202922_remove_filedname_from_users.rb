class RemoveFilednameFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :filedname, :string
  end
end
