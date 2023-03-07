import { Container } from './styles';

export function ButtonText({ icon: Icon, title, ...rest }) {
  return(
    <Container {...rest}>
      { Icon && <Icon size={20} /> }
      { title }
    </Container>
  );
}
