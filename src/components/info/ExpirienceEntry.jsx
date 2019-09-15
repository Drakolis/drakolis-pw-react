/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { CardContent, Card, Typography, Chip, Divider } from '@material-ui/core';

const CardDivider = styled(Divider)`
  margin: 0.5rem 0 !important;
`;
const Tag = styled(Chip)`
  margin: 0 0.2rem 0.4rem 0 !important;
`;

export default function ExpirienceEntry({ name, description, tech }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        {description}
        <CardDivider />
        {tech.map(i => (
          <Tag label={i} />
        ))}
      </CardContent>
    </Card>
  );
}
