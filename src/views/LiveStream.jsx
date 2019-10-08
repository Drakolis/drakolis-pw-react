import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Grid, Toolbar, AppBar, IconButton } from '@material-ui/core';
import { PlayArrow, Stop, Fullscreen } from '@material-ui/icons';

const Grow = styled.div`
  flex-grow: 1;
`;

export default function LiveStream() {
  const [videoAvailable] = React.useState(true);
  const [videoPlaying, setVideoPlaying] = React.useState(videoAvailable);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid item>
          <ReactPlayer
            width="100%"
            height="100%"
            url="http://stream.drakolis.pw/live/drakolis-test/index.m3u8"
            playing={videoPlaying}
          />
          <AppBar color="secondary" position="relative">
            <Toolbar variant="dense">
              {!videoPlaying ? (
                <IconButton>
                  <PlayArrow onClick={() => setVideoPlaying(true)} />
                </IconButton>
              ) : (
                <IconButton>
                  <Stop onClick={() => setVideoPlaying(false)} />
                </IconButton>
              )}
              <Grow />
              <IconButton>
                <Fullscreen />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
}
