import { Container, HomeSection, Title, MovieList } from "./styles";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { MovieCard } from "../../components/MovieCard";

export function Home() {
  return (
    <Container>
      <Header />
      <HomeSection>
        <Title>
          <h1>Meus Filmes</h1>
          <Link to="/create">
            <Button icon={FiPlus} title="Adicionar Filme"/>
          </Link>
        </Title>
        <MovieList>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </MovieList>
      </HomeSection>
    </Container>
  );
}
