export const goToFeed = (navigate) => {
    navigate("/feed")
};

export const goToLogin = (navigate) => {
    navigate("/")
};

export const goToSignUp = (navigate) => {
    navigate("/signup")
};

export const goToRestaurantDetails = (navigate,restaurantId) => {
    navigate(`/restaurants/${restaurantId}`)
}