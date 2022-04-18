# frozen_string_literal: true

class BookingsController < ApplicationController
  skip_forgery_protection only: %i[create]

  def address
    render inertia: 'Address'
  end

  def service
    render inertia: 'Service', props: {
      address: params[:address],
      categories: Category.all.complete_json
    }
  end

  def magicians
    categories = Category.where(id: params[:services].keys)
    magicians = Magician.includes(:magician_categories).where(magician_categories: { category_id: categories })
    render inertia: 'Magicians', props: {
      address: params[:address],
      magicians_counts: magicians.count,
      magicians: magicians.order('RANDOM()').limit(5).complete_json,
      services: categories.complete_json.map { |json| json.merge({ quantity: params[:services][json['id'].to_s] }) } ,
      services_params: params[:services]
    }
  end

  def confirm
    magician = Magician.find(params[:magician_id])
    render inertia: 'Confirm', props: {
      services: params[:services],
      services_params: params[:services_params],
      address: params[:address],
      magician: magician.as_json.except(:created_at, :updated_at)
    }
  end

  def create
    find_or_create_client
    create_appointment

    redirect_to '/', notice: "Votre rendez-vous avec #{@appointment.magician.first_name} a bien été pris en compte"
  end

  private

  def find_or_create_client
    @client = Client.find_or_create_by(client_params)
  end

  def create_appointment
    appointment = Appointment.new(**appointment_params, client: @client)
    params[:categories].map do |category_id, quantity|
      appointment.appointment_categories.build(category_id: category_id, quantity: quantity)
    end
    appointment_id = Appointment.import([appointment], recursive: true).ids[0]
    @appointment = Appointment.find(appointment_id)
  end

  def client_params
    params.permit(:first_name, :last_name, :email)
  end

  def appointment_params
    params.permit(:address, :magician_id)
  end

end
