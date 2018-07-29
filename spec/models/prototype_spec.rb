require 'rails_helper'

describe Prototype do
  describe '#create' do
    it "is valid prototype" do
      expect(build(:prototype)).to be_valid
      expect(response).to render_template :new
    end
  end
end
