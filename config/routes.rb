Rails.application.routes.draw do
  root to: "orders#index"
  resources :categories
  resources :items
end

