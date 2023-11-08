import React from 'react';
import {
  Container, Grid, Header, Image,
} from 'semantic-ui-react';
import about from '../utils/data/copy/about';

function About() {
  return (
    <Container style={{ paddingBottom: '6em' }}>
      <Grid className="about" stackable style={{ padding: '6em' }} textAlign="center" verticalAlig="middle" columns="2">
        <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
          <Image size="huge" rounded src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624721/basswood/general%20website%20images/hip-camp_jg0at5.jpg" />
        </Grid.Column>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Header as="h1" style={{ fontSize: '4em' }} content="About Us" />
        </Grid.Column>
      </Grid>
      <Container>
        <Header as="h1" content={about.header} />
        <p style={{ fontSize: '18px' }}>
          {`${about.general} ${about.location}`}
        </p>
        <p style={{ fontSize: '18px' }}>
          {about.woodhouse}
        </p>
        <p style={{ fontSize: '18px' }}>
          {about.brenda}
          <br />
          {about.doug}
          <br />
          <br />
          {about.basswood}
        </p>
      </Container>
    </Container>
  );
}

export default About;
