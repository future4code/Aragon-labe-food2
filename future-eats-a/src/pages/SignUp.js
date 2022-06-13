import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useForm } from "../hooks/useForm";
import { requestSignUp } from "../services/requests";
import logo from "../img/logo.png";
import styled from "styled-components";

const Logo = styled.main`
  text-align: center;

  img {
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
  }
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const signUp = (e) => {
    e.preventDefault();
    requestSignUp(form, navigate, clear);
  };
  return (
    <Logo>
      <main>
        <img src={logo} alt="logo" />
        <Header title="Cadastrar" />
        <section>
          <form onSubmit={signUp}>
            <label htmlFor="name">
              <span>Nome</span>
            </label>
            <input
              id="name"
              placeholder="Nome e sobrenome"
              type={"name"}
              name={"name"}
              value={form.name}
              onChange={onChange}
              required
            />
            <br />
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input
              id="email"
              placeholder="email@email.com"
              type={"email"}
              name={"email"}
              value={form.email}
              onChange={onChange}
              required
            />
            <br />
            <label htmlFor="cpf">
              <span>CPF</span>
            </label>
            <input
              placeholder="000.000.000-00"
              type={"cpf"}
              name={"cpf"}
              value={form.cpf}
              onChange={onChange}
              required
            />
            <br />
            <label htmlFor="senha">
              <span>Senha</span>
            </label>
            <input
              pattern={"^.{6,}$"}
              placeholder="mínimo 6 caracteres"
              type={"password"}
              name={"password"}
              value={form.password}
              onChange={onChange}
              required
              //colocar icone de olho
            />
            <br />
            <button type="submit">Criar</button>
          </form>
        </section>
      </main>
    </Logo>
  );
};
