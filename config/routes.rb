Rails.application.routes.draw do
  root to: "orders#index"

  resources :orders

  resources :categories
  
  resources :items
  
end

