import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';

export function TagMakerItem({ newItem, value = "", ...rest }) {
  return(
    <Container 
      newItem={newItem}
      contentEditable={newItem ? "true" : "false"}
      suppressContentEditableWarning={true}
      
      {...rest} >
      {newItem ? "Nova tag" : value}
      {newItem ? <FiPlus/> : <FiX/>}
    </Container>
  );
}
