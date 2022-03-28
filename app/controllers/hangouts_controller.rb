class HangoutsController < ApplicationController
    before_action :find_hangout, only: %i[update destroy]
    skip_before_action :authorized, only: %i[create index show]

    def index
        @hangout = Hangout.all
        render json: @hangout
    end

    #GET /hangouts/1

    def show 
        @hangout = Hangout.where("user_id = #{params[:id]}")
        render json: @hangout
    end

    def create
        friends = params[:user_id]
    invitedFriends =  friends.map do |f|
            Hangout.find_or_create_by(event_id: params[:event_id], user_id: f)
        end
        render json: invitedFriends
    end

    def destroy
        @hangout.destroy
    end

    private

    def find_hangout 
        @hangout = Hangout.find(params[:id])    
    end

    def hangout_params
        params.permit(:user_id, :event_id)
    end
end
