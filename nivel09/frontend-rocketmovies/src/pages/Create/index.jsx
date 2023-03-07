import { Container, CreateSection, CreateForm } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TagMaker } from "../../components/TagMaker";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

export function Create() {
  return (
    <Container>
      <Header />
      <CreateSection>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
        <CreateForm>
          <h1>Novo Filme</h1>
          <div>
            <Input type="text" placeholder="Título" required />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <div>
            <h3>Marcadores</h3>
            <TagMaker/>
          </div>
          <div>
            <Button title="Excluir filme" inverted />
            <Button title="Salvar alterações" />
          </div>
        </CreateForm>
      </CreateSection>
    </Container>
  );
}
