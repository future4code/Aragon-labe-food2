import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { goToRestaurants } from "../routes/coordinator";
import { requestAddress } from "../services/requests";
import { TextField, Button } from "@mui/material";
import logo from "../assets/img/logo.png";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { GlobalContext } from "../global/GlobalContext";

export const Address = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const {states, requests} = useContext(GlobalContext)
  const [isLoading,setIsLoading] = useState(false)

  const submitAddress = (e) => {
    e.preventDefault()
    setIsLoading(true)
    requests.insertAddress(form, setIsLoading, navigate)
  }

  return (
    <main>
      <img src={logo} width={"150px"} alt="logo" />
      <p>Meu endereço</p>
      <form onSubmit={submitAddress}>
        <TextField
          label={"Logradouro"}
          placeholder="Rua / Av."
          id={"street"}
          type={"street"}
          name={"street"}
          value={form.street}
          onChange={onChange}
          required
        />
        <br />
        <TextField
          label={"Número"}
          placeholder="Número"
          id={"number"}
          type={"number"}
          name={"number"}
          value={form.number}
          onChange={onChange}
          required
        />
        <br />
        <TextField
          label={"Complemento"}
          placeholder="Apto. / Bloco"
          id={"complement"}
          type={"complement"}
          name={"complement"}
          value={form.complement}
          onChange={onChange}
        />
        <br />
        <TextField
          label={"Bairro"}
          placeholder="Bairro"
          id={"neighbourhood"}
          type={"neighbourhood"}
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <br />
        <TextField
          label={"Cidade"}
          placeholder="Cidade"
          id={"city"}
          type={"city"}
          name={"city"}
          value={form.city}
          onChange={onChange}
          required
        />
        <br />
        <TextField
          label={"Estado"}
          placeholder="Estado"
          id={"state"}
          type={"state"}
          name={"state"}
          value={form.state}
          onChange={onChange}
          required
        />
        <br />
        <Button
          variant="contained"
          sx={{
            margin: "0 2vw",
            backgroundColor: "#5CB646",
            color: "#000000",
            width: "100%",
          }}
          type="submit"
        >
          Salvar
        </Button>
      </form>
      <section>
        <Button
          sx={{ textDecoration: "underline", color: "#000000" }}
          onClick={() => goToRestaurants(navigate)}
        ></Button>
      </section>
    </main>
  );
};
