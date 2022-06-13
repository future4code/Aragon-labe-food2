import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { requestLogin } from "../services/requests";
import logo from "../img/logo.png";
import styled from "styled-components";
import { Header } from "../components/Header";

const Logo = styled.main`
  text-align: center;

  img {
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({ email: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    requestLogin(form, navigate, clear);
  };

  return (
    <Logo>
      <main>
        <img src={logo} alt="logo" />
        <Header title="Entrar" />
        <section>
          <form onSubmit={login}>
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input
              placeholder="email@email.com"
              onInvalid={"email"}
              type={"email"}
              name={"email"}
              value={form.email}
              onChange={onChange}
            />
            <br />
            <label htmlFor="senha">
              <span>Senha</span>
            </label>
            <input
            pattern={"^.{6,}$"}
              placeholder="mínimo 6 caracteres"
              onInvalid={"password"}
              type={"password"}
              name={"password"}
              value={form.password}
              onChange={onChange}
            />
            <br />
            <button type="submit">Entrar</button>
          </form>
        </section>
        <section>
            <span>Não possui cadastro? Clique aqui.</span>
        </section>
      </main>
    </Logo>
  );
};
