import React from 'react';
import styled from 'styled-components';
import AppRouter from './AppRouter';

const Padder = styled.div`
  padding: 0 5rem;
`;

export default function App() {
  return (
    <Padder>
      <AppRouter />
    </Padder>
  );
}
