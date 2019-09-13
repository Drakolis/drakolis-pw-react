import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Calendar,
  MapMarker,
  GenderTransgender,
  HumanMaleFemale,
  Vk,
  Facebook,
  Twitter,
  Deviantart,
  Linkedin,
  Skype,
  Whatsapp,
  Email,
  Instagram,
  Discord,
  GithubCircle,
  Telegram,
} from 'mdi-material-ui';
import {
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Fab,
  Tooltip,
  CardMedia,
  CardContent,
  Card,
  Typography,
} from '@material-ui/core';
import data from '../mock/drakolis.json';

const BaseHeader = styled.h1`
  font-weight: 300;
  margin: 20px 0 0 0;
  text-align: center;
`;

const Name = styled(BaseHeader)`
  font-family: Coda, Roboto, sans-serif;
  font-size: 6rem;
  line-height: 6rem;
`;

const Title = styled(BaseHeader)`
  font-family: Roboto, sans-serif;
  font-size: 3rem;
  line-height: 3rem;
`;

const BlockDivider = styled(Divider)`
  height: 10px;
`;

const MyPhoto = styled(CardMedia)`
  width: 100%;
  height: 400px;
`;

const mapContact = contact => {
  switch (contact.type) {
    case 'vk':
      return {
        ...contact,
        color: '#4a76a8',
        icon: Vk,
        tooltip: 'VK',
      };
    case 'facebook':
      return {
        ...contact,
        color: '#4267b2',
        icon: Facebook,
        tooltip: 'Facebook',
      };
    case 'twitter':
      return {
        ...contact,
        color: '#1da1f2',
        icon: Twitter,
        tooltip: 'Twitter',
      };
    case 'deviantart':
      return {
        ...contact,
        color: '#475c4d',
        icon: Deviantart,
        tooltip: 'DeviantArt',
      };
    case 'linkedin':
      return {
        ...contact,
        color: '#0073b1',
        icon: Linkedin,
        tooltip: 'Linked In',
      };
    case 'telegram':
      return {
        ...contact,
        color: '#5682a3',
        icon: Telegram,
        tooltip: 'Telegram',
      };
    case 'skype':
      return {
        ...contact,
        color: '#1686d9',
        icon: Skype,
        tooltip: 'Skype',
      };
    case 'github':
      return {
        ...contact,
        color: '#24292e',
        icon: GithubCircle,
        tooltip: 'GitHub',
      };
    case 'whatsapp':
      return {
        ...contact,
        color: '#1ebea5',
        icon: Whatsapp,
        tooltip: 'WhatsApp',
      };
    case 'mail':
      return {
        ...contact,
        color: '#00796B',
        icon: Email,
        tooltip: 'Mail',
      };
    case 'instagram':
      return {
        ...contact,
        color: '#303030',
        icon: Instagram,
        tooltip: 'Instagram',
      };
    case 'discord':
      return {
        ...contact,
        color: '#7289da',
        icon: Discord,
        tooltip: 'Discord',
      };
    default:
      return contact;
  }
};
const getContactOnClickAction = ({ url }) => {
  if (url.indexOf('http') > -1) {
    return () => {
      window.open(url, '_blank');
      window.focus();
    };
  }
  return () => {
    window.location.href = url;
  };
};

class InfoNew extends Component {
  constructor() {
    super();
    this.state = data;
  }

  render() {
    const {
      name,
      title,
      photoUrl,
      dateOfBirth,
      location,
      sex,
      orientation,
      contacts,
      likes,
      dislikes,
      languages,
      skills,
    } = this.state;
    const mappedContacts = contacts.map(c => mapContact(c));
    const aboutMeEntries = [
      {
        icon: Calendar,
        title: 'Date of Birth',
        value: dateOfBirth,
      },
      {
        icon: MapMarker,
        title: 'Location',
        value: location,
      },
      {
        icon: GenderTransgender,
        title: 'Gender',
        value: sex,
      },
      {
        icon: HumanMaleFemale,
        title: 'Orientation',
        value: orientation,
      },
    ];
    return (
      <Grid container spacing={3} alignItems="stretch" direction="column">
        <Grid item xs={12}>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </Grid>
        <Grid item xs={12}>
          <BlockDivider light variant="fullWidth" />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justify="space-around"
            alignItems="flex-start"
            direction="row"
          >
            <Grid container xs={4} spacing={2} justify="flex-start">
              <Grid item xs={12}>
                <Card>
                  <MyPhoto image={photoUrl} title="It's me!" />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      About Me
                    </Typography>
                    <List>
                      {aboutMeEntries.map(i => (
                        <ListItem>
                          <ListItemIcon>
                            <i.icon />
                          </ListItemIcon>
                          <ListItemText primary={i.value} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={4} spacing={2} justify="flex-start">
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Languages I Speak
                    </Typography>
                    <List>
                      {languages.map(i => (
                        <ListItem>
                          <ListItemText primary={i[0]} secondary={i[2]} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      I Have Experience In
                    </Typography>
                    <List>
                      {skills.map(i => (
                        <ListItem>
                          <ListItemText primary={i[0]} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={4} spacing={2} justify="flex-start">
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      I Like
                    </Typography>
                    <List>
                      {likes.map(i => (
                        <ListItem>
                          <ListItemText primary={i[0]} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      I Dislike
                    </Typography>
                    <List>
                      {dislikes.map(i => (
                        <ListItem>
                          <ListItemText primary={i[0]} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BlockDivider light variant="fullWidth" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} direction="row" justify="space-evenly">
            {mappedContacts.map(c => (
              <Tooltip title={c.tooltip}>
                <Fab
                  size="large"
                  style={{ backgroundColor: c.color, color: 'white' }}
                  onClick={getContactOnClickAction(c)}
                >
                  <c.icon fontSize="large" />
                </Fab>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BlockDivider light variant="fullWidth" />
        </Grid>
      </Grid>
    );
  }
}

export default InfoNew;
