import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="http://github.com/FranzWarm.png/" 
          alt="Foto do Usuário" 
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>FranzWarm</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}
