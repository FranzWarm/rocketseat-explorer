import { TagMakerItem } from '../TagMakerItem';
import { Container } from './styles';

export function TagMaker() {
  return(
    <Container>
      <TagMakerItem value="Drama"/>
      <TagMakerItem newItem="true" />
    </Container>
  );
}
