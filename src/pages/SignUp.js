import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { TextField, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../assets/img/logo.png";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalContext";

export const SignUp = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    password: "",
    cpf: ""
  });

  const {states, requests} = useContext(GlobalContext)

  const submitSignup = (e) => {
    e.preventDefault()
    setIsLoading(true)
    requests.requestSignup(form, navigate, setIsLoading)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
}

  return (
    <>
      <Header />
      <section>
        <img src={logo} width={"150px"} alt="logo" />
        <h2>Cadastro</h2>
        <form onSubmit={submitSignup}>
          <TextField
            label="Nome"
            id={"name"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome e sobrenome"
            required
          />
          <br />
          <TextField
            label="E-mail"
            placeholder="email@email.com"
            id={"email"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          <br />
          <TextField
            label="CPF"
            type={"text"}
            placeholder={"000.000.000-00"}
            variant={"outlined"}
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            inputProps={{ maxLength: 14 }}
            pattern="[0-9]"
            required
          />
          <br />
          <OutlinedInput
                    label={"Senha"}
                    id={"password"}
                    placeholder={"Senha *"}
                    type={showPassword? 'text' : 'password'}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={
                      "Sua senha deve ter entre 8 e 30 caracteres"
                    }
                    required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
          <br />
          <OutlinedInput
                    label={"Senha"}
                    id={"password-confirm"}
                    placeholder={"Confirme a senha *"}
                    type={showPassword? 'text' : 'password'}
                    name={"password"}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={
                      "Sua senha deve ter entre 8 e 30 caracteres"
                    }
                    required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
          <br />
          <Button
            sx={{
              backgroundColor: "#5CB646",
            }}
            variant="contained"
            type={"submit"}
          >
            Criar
          </Button>
        </form>
      </section>
    </>
  );
};
