class FriendRequestsController < ApplicationController
  before_action :set_friend_request, only: %i[update destroy]
  skip_before_action :authorized, only: %i[index create show update destroy]

  # GET /friend_requests
  def index
    @friend_requests = FriendRequest.all

    render json: @friend_requests
  end

  # GET /friend_requests/1
  def show
    userRequest =
      FriendRequest.where(
        "reciever_id = #{params[:id]} OR requestor_id = #{params[:id]} ",
      )
    render json: userRequest
  end

  # POST /friend_requests
  def create
    @friend_request = FriendRequest.new(friend_request_params)

    if @friend_request.save
      render json: @friend_request, status: :created, location: @friend_request
    else
      render json: @friend_request.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /friend_requests/1
  def update
    if @friend_request.update(friend_request_params)
      Friendship.create(
        friend_b_id: params[:requestor_id],
        friend_a_id: params[:reciever_id],
      )
      render json: @friend_request
    else
      render json: @friend_request.errors, status: :unprocessable_entity
    end
  end

  # DELETE /friend_requests/1
  def destroy
    @friend_request.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_friend_request
    @friend_request = FriendRequest.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def friend_request_params
    params.permit(:requestor_id, :reciever_id, :status)
  end
end
