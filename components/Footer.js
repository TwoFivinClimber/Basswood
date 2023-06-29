import Link from 'next/link';
import React from 'react';
import {
  Menu, Grid, Header, Image, Container,
} from 'semantic-ui-react';

function Footer() {
  return (
    <>
      <Container>
        <Grid columns="3" padded="vertically">
          <Grid.Row>
            <Grid.Column>
              <Menu.Item style={{ display: 'flex' }} header as="h3">
                <Image style={{ marginRight: '1em' }} src="/images/logo.png" size="mini" />
                Basswood Farm
              </Menu.Item>
              <Grid columns="2">
                <Grid.Column>
                  <Menu.Item content="Home" />
                  <Menu.Item content="About Us" />
                  <Menu.Item content="Contact Us" />
                </Grid.Column>
                <Grid.Column>
                  <Menu.Item content="Horse Boarding" />
                  <Menu.Item content="Air BnB" />
                  <Menu.Item content="Experiences" />
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item header as="h3" content="Wood House Homestead" />
              <Menu.Item content="CSA" />
              <Menu.Item content="Products" />
              <Menu.Item content="Meet The Goats" />
            </Grid.Column>
            <Grid.Column>
              <Menu.Item header as="h3" content="Connect With Us" />
              <Menu.Item content="Instagram" />
              <Menu.Item content="Facebook" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <span style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>&copy; Baswood Farm All Rights Reserved.</span>
    </>
  );
}

export default Footer;
