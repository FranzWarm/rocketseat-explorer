#!/bin/bash
mkdir "src/components/$1"
cd "src/components/$1"
echo "import styled from 'styled-components';

export const Container = styled.div\`
  
\`;" >> styles.js

echo "import { Container } from './styles';

export function $1() {
  return(
    <Container>
      
    </Container>
  );
}" >> index.jsx

