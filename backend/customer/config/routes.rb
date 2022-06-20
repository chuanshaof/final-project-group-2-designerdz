Rails.application.routes.draw do
  namespace :api do #domain/api/
    namespace :v1 do #domain/api/v1
      resources :users #domain/api/v1/users
    end 
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # this route is needed if not will have 500 internal server error, undefined method 'user_url' for #<Api::V1::UsersController:0x....>
  post 'api/v1/users' => 'users#create', :as => 'user'

  # Defines the root path route ("/")
  # root "articles#index"
end