# frozen_string_literal: true

class ApplicationController < ActionController::Base

  def root
    puts notice
    render inertia: 'Root', props: {
      notice: notice
    }
  end
end
