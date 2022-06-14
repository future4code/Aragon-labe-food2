export const goToInitialPage = (navigate) => {
    navigate("/")
};

export const goToLogin = (navigate) => {
    navigate("/login")
};

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToSignUp = (navigate) => {
    navigate("/signup")
};

export const goToRestaurantDetails = (navigate,restaurantId) => {
    navigate(`/restaurants/${restaurantId}`)
}

export const goToCart = (navigate) => {
    navigate(`/active-order`)
}