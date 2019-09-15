import React from 'react';
import styled from 'styled-components';
import InfoNew from './views/InfoNew';

const Padder = styled.div`
  padding: 0 5rem;
`;

export default function App() {
  return (
    <Padder>
      <InfoNew />
    </Padder>
  );
}
