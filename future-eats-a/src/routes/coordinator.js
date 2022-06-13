export const goToHome = (navigate) => {
    navigate("/home")
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

export const goToCart = (navigate) => {
    navigate(`/active-order`)
}