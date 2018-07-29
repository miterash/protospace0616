Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  resources :users, only: [:show, :edit, :update]
  resources :prototypes, only: [:index, :new, :create, :show, :edit, :update, :destroy] do
    resources :comments, only: [:create, :new, :edit, :update, :destroy]
  end
end
