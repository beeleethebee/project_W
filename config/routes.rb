Rails.application.routes.draw do
  resources :bookings, only: %i[create] do
    collection do
      get :address
      get :service
      get :magicians
      get :confirm
    end
  end
  root 'application#root'
end
