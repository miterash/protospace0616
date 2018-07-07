class Category < ActiveRecord::Base
  validates :name,presence:true,length:{maximum:50}
  has_many :prototypes, through: :articles_categories
  has_many :prototype_categories, dependent: :destroy
end
