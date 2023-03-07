import { Container, PlotPreview, Stars, TagList } from "./styles";
import { Link } from "react-router-dom";

import starIcon from "../../assets/star.svg";
import halfStarIcon from "../../assets/halfstar.svg";

import { Tag } from "../Tag";

export function MovieCard({ icon: Icon, ...rest }) {
  return (
    <Link to="/preview">
      <Container>
        <div>
          <h2>Interestellar</h2>
          <Stars>
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={halfStarIcon} alt="" />
          </Stars>
        </div>
        <PlotPreview>
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
            NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
            Cooper, acredita que seu quarto está assombrado por um fantasma que
            tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
            uma inteligência desconhecida que está enviando mensagens codificadas
            através de radiação gravitacional, deixando coordenadas em binário que
            os levam até uma instalação secreta da NASA liderada pelo professor
            John Brand. O cientista revela que um buraco de minhoca foi aberto
            perto de Saturno e que ele leva a planetas que podem oferecer
            condições de sobrevivência para a espécie humana.
          </p>
        </PlotPreview>
        <TagList>
          <Tag title="Ficção Científica" />
          <Tag title="Drama" />
          <Tag title="Família" />
        </TagList>
      </Container>
    </Link>
  );
}
