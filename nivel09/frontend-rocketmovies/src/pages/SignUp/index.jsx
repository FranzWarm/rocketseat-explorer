import { Container, SignInSection, Background, Form } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  return(
    <Container>
      <SignInSection>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h2>Crie sua conta</h2>
          <Input icon={FiUser} type="text" placeholder="Nome" required />
          <Input icon={FiMail} type="email" placeholder="E-mail" required />
          <Input icon={FiLock} type="password" placeholder="Senha" required />
          <Button title="Cadastrar"/>
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
          </Link>
        </Form>
      </SignInSection>
      <Background />
    </Container>
  );
}
