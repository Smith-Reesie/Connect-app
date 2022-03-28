class FriendshipsController < ApplicationController
  before_action :set_friendship, only: %i[show update destroy]
  skip_before_action :authorized, only: %i[index allfriends destroy unfriend]

  # GET /friendships
  def index
    @friendships = Friendship.all

    render json: @friendships
  end

  # GET /friendships/1
  def allfriends
    user = User.find(params[:id])
    userFriendsA = user.friendships_as_friend_a
    userFriendsB = user.friendships_as_friend_b
    userFriends = userFriendsA + userFriendsB

    # userFriends =
    #   Friendship.where(
    #     "friend_a_id = #{params[:id]} OR friend_b_id = #{params[:id]} ",
    #   )
    render json: userFriends
  end

  # POST /friendships
  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render json: @friendship, status: :created, location: @friendship
    else
      render json: @friendship.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /friendships/1
  # def update
  #   if @friendship.update(friendship_params)
  #     render json: @friendship
  #   else
  #     render json: @friendship.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /friendships/1
  def destroy
    @friendship.destroy
  end

  def unfriend
    friendshipA =
      Friendship.where(
        "friend_b_id = #{params[:user_id]} AND friend_a_id = #{params[:friend_id]} ",
      )
    friendshipB =
      Friendship.where(
        "friend_b_id = #{params[:friend_id]} AND friend_a_id = #{params[:user_id]} ",
      )
    friendship = friendshipA + friendshipB
    friendship[0].destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_friendship
    @friendship = Friendship.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def friendship_params
    params.permit(:friend_a, :friend_b)
  end
end
