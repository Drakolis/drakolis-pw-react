import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBarHeader = styled(Typography)`
  text-transform: uppercase;
  font-weight: 300;
`;
const Accent = styled.span`
  font-family: Coda, Roboto, sans-serif !important;
  font-weight: 450;
`;

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavBarHeader variant="h5">
          <Accent>Drakolis</Accent>.PW
        </NavBarHeader>
      </Toolbar>
    </AppBar>
  );
}
