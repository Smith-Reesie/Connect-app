Rails.application.routes.draw do
  resources :events
  resources :friendships
  resources :friend_requests
  resources :users, only: %i[show create index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/me', to: 'users#show'
  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  patch '/edit/:id', to: 'users#update'

  # get '/users/:id/friend_request', to: 'users'
  get '/requests', to: 'friend_requests#index'
  post '/request', to: 'friend_requests#create'
  get '/request/:id', to: 'friend_requests#show'
  patch '/accept/:id', to: 'friend_requests#update'
  delete '/cancel/:id', to: 'friend_requests#destroy'

  # delete '/decline', to: 'friend_reuests#destroy'

  get '/friends/:id', to: 'friendships#allfriends'
  post 'newfriend', to: 'friendships#post'
  delete '/remove/:user_id/:friend_id', to: 'friendships#unfriend'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/newEvent', to: 'events#create'
  get '/userEvents/:id', to: 'events#show'
  get '/allEvents', to: 'events#index'
  delete '/cancelEvent/:id', to: 'events#destroy'

  post '/hangout', to: 'hangouts#create'
  get '/userHangouts/:id', to: 'hangouts#show'
  
end
