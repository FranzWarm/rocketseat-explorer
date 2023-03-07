import { Link } from "react-router-dom";
import { Container, ProfileForm } from "./styles";
import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <Container>
      <div>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
      </div>
      <ProfileForm>
        <div>
          <img src="http://github.com/FranzWarm.png" alt="" />
          <Button icon={FiCamera} />
        </div>
        <Input icon={FiUser} type="text" placeholder="Nome de Usuário" />
        <Input icon={FiMail} type="email" placeholder="Email" />
        <Input icon={FiLock} type="password" placeholder="Senha Atual" />
        <Input icon={FiLock} type="password" placeholder="Nova Senha" />
        <Button title="Salvar"/>
      </ProfileForm>
    </Container>
  );
}
