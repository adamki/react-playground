Rails.application.routes.draw do
  root 'welcome#index'

  get "/dashboard", to: "dashboard#show"
end
