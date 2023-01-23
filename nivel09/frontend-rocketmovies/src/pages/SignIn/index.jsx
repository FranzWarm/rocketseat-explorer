import { Container, SignInSection, Background, Form } from './styles';
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  return(
    <Container>
      <SignInSection>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h2>Faça seu login</h2>
          <Input icon={FiMail} type="email" placeholder="E-mail" required />
          <Input icon={FiLock} type="password" placeholder="Senha" required />
          <Button title="Entrar"/>
          <Link to="/cadastrar">
            <ButtonText title="Criar conta" />
          </Link>
        </Form>
      </SignInSection>
      <Background />
    </Container>
  );
}
