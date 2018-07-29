require 'rails_helper'

describe PrototypesController, type: :controller do
  describe 'GET #new' do
    it "renders the :new template" do
      get :new

    end
  end
end
