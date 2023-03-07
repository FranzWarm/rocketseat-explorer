import { Container } from './styles';

export function Button({ icon: Icon, title, inverted, ...rest }) {
  return(
    <Container inverted={inverted} { ...rest } >
      {Icon && <Icon size={20} />}
      { title }
    </Container>
  );
}
