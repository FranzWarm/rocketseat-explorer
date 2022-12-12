import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export default function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis quo rerum natus harum quisquam, aliquid dignissimos ullam! Quae molestias aperiam nesciunt ad rerum architecto est recusandae incidunt iusto delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque minima nulla sed officiis autem recusandae adipisci hic, eius, ducimus dolor iste. Odit, culpa pariatur. Dignissimos laudantium eum magnam corporis?</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://rockectseat.com.br/</a>
              </li>
              <li>
                <a href="#">http://rockectseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
