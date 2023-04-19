import React from 'react';
import {
  Container, Grid, Header, Image,
} from 'semantic-ui-react';

function About() {
  return (
    <>
      <Grid style={{ padding: '6em' }} textAlign="center" verticalAlig="middle" columns="2">
        <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
          <Image size="medium" rounded src="/images/goat.jpg" />
        </Grid.Column>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Header as="h1" style={{ fontSize: '4em' }} content="About Basswood" />
        </Grid.Column>
      </Grid>
      <Container>
        <Header content="Lorem ipsum dolor sit amet" />
        <p>
          In the heart of Tennessee, Basswood Farm takes pride in its horses, from foals to adults - Thoroughbreds, KWPN and TB/warmblood crosses. Originally a breeder of successful hunter-jumpers, we turned to dressage in 2003, with the importation of several Dutch horses.  Our mares are bred to top quality Dutch Warmblood stallions, and our foals are raised with love.  Though we specialize in dressage, we do have a few hunter-jumper prospects as well.
        </p>
        <p>
          We have horses suited to most levels of riders. If you are looking for a dressage prospect, we have home-bred KWPN horses by top Dutch and American KWPN stallions, out of excellent Dutch KWPN mares.  Many of our horses are also out of jumper lines, and may do well in the jumper ring.
        </p>
        <p>
          Our barn is gaining in reputation, and a look at our horses will tell you why. Thank you for visiting our website - we hope you will enjoy seeing what we have to offer.
        </p>
        <p>
          Brenda Bass - owner
          <br />
          Basswood Farm
        </p>
      </Container>
    </>
  );
}

export default About;
