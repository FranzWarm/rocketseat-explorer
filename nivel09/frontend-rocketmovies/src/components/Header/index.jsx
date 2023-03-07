import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi"

export function Header() {
  return (
    <Container>
      <Link to="/">
        <h3>RocketMovies</h3>
      </Link>
      <Input icon={FiSearch} placeholder="Pesquisar por título"/>
      <div>
        <div>
          <Link to="/profile">
            <strong>FranzWarm</strong>
          </Link>
          <Link to="/">
            <span>sair</span>
          </Link>
        </div>
        <img src="http://github.com/franzwarm.png" alt="Foto de Usuário" />
      </div>
    </Container>
  );
}
