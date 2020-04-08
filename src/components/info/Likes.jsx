/* eslint-disable react/prop-types */
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  CardContent,
  Card,
  Typography,
  ListItemIcon,
} from '@material-ui/core';
import EmojiIcon from '../global/EmojiIcon';

export default function Likes({ name, array }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <List>
          {array.map(i => (
            <ListItem>
              <ListItemIcon>
                <EmojiIcon emoji={i[1]} />
              </ListItemIcon>
              <ListItemText primary={i[0]} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
