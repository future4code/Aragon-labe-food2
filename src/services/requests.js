import { BASE_URL } from "../constants/urls";

import axios from "axios";
import { HeadphonesRounded } from "@mui/icons-material";

export const login = (body, navigate, setIsLoading, setState) => {
  const url = `${BASE_URL}/login`;

  axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setState(res.data.user);
      setIsLoading(false);
      navigate("/restaurants");
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
};

export const signUp = (body, setter, navigate, setIsLoading) => {
  const url = `${BASE_URL}/signup`;

  axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      setter(res.data.user);
      navigate("/address");
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const addAddress = (body, setIsLoading, setUser, navigate) => {
  const url = `${BASE_URL}/address`;
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  axios
    .put(url, body, headers)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setIsLoading(false);
      alert("Endereço atualizado com sucesso!");
      navigate("/restaurants", { replace: true });
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
};

export const getProfile = (setAddressUser) => {
  const url = `${BASE_URL}/profile`;
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  axios
    .get(url, headers)
    .then((res) => {
      setAddressUser(res.data.user);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const getRestaurantsDetails = async (restaurantId) => {
  const url = `${BASE_URL}/restaurants/${restaurantId}`;
  const token = localStorage.getItem("token");
  const headers = {
    headers: { auth: token },
  };
  try {
    const request = await axios.get(url, headers);
    return request.data;
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const placeOrder = (body, restaurantId) => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, headers)
    .then((res) => {
      alert("O pedido foi enviado!");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
