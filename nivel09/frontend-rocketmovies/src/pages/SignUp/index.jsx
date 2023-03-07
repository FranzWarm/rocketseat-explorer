import { useState } from "react";
<<<<<<< HEAD
import { Container, SignInSection, Background, Form } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [name, setNome] = useState("");

  return (
    <Container>
      <SignInSection>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h2>Crie sua conta</h2>
          <Input icon={FiUser} type="text" placeholder="Nome" required />
          <Input icon={FiMail} type="email" placeholder="E-mail" required />
          <Input icon={FiLock} type="password" placeholder="Senha" required />
          <Button title="Cadastrar" />
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
          </Link>
        </Form>
      </SignInSection>
=======
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Background, Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("não foi possível cadastrar novo usuário.");
        }
      });
  }

  return (
    <Container>
>>>>>>> 4c3090977156d2107d6edd7892fc2e59c8d24992
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua Conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <ButtonText title="Já tenho uma conta cadastrada" isActive />
        </Link>
      </Form>
    </Container>
  );
}
