import React from 'react';
import {
  Container, Grid, Header, Image,
} from 'semantic-ui-react';
import about from '../utils/data/copy/about';

function About() {
  return (
    <Container className="about" style={{ paddingBottom: '6em' }}>
      <Grid style={{ padding: '6em' }} textAlign="center" verticalAlig="middle" columns="2">
        <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
          <Image size="medium" rounded src="/images/goat.jpg" />
        </Grid.Column>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Header as="h1" style={{ fontSize: '4em' }} content="About Basswood" />
        </Grid.Column>
      </Grid>
      <Container>
        <Header content={about.header} />
        <p style={{ fontSize: '18px' }}>
          {about.general}
        </p>
        <p style={{ fontSize: '18px' }}>
          {about.horses}
        </p>
        <p style={{ fontSize: '18px' }}>
          {about.barn}
        </p>
        <p style={{ fontSize: '18px' }}>
          {about.brenda}
          <br />
          {about.basswood}
        </p>
      </Container>
    </Container>
  );
}

export default About;
