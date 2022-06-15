export const goToHome = (navigate) => {
    navigate("/home")
};

export const goToLogin = (navigate) => {
    navigate("/login")
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

export const goToAddress = (navigate) => {
    navigate("/address")
}

export const goToFeed = (navigate) => {
    navigate("/restaurants")
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}