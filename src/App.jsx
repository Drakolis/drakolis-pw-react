import React from 'react';
import styled from 'styled-components';
import InfoNew from './views/InfoNew';

const Padder = styled.div`
  width: 100vw;
  padding: 0 5rem;
`;

export default function App() {
  return (
    <Padder>
      <InfoNew />
    </Padder>
  );
}
