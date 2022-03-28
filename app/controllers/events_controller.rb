class EventsController < ApplicationController
    skip_before_action :authorized, only: %i[create index show destroy]

    def create
        event = Event.new(events_params)
        event.owner_id = session[:user_id] 
        event.save
        render json: event
    end

    #GET /Events / 1
    def show 
        userEvents = Event.where("owner_id = #{params[:id]}")
        render json: userEvents
    end

    def index 
        event = Event.all
        render json: event
    end

    def update
        event = Event.update(params)
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    private 

    def events_params
        params.permit(:location, :time, :date, :price, :owner_id)
    end
end
