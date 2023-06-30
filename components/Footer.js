import Link from 'next/link';
import React from 'react';
import {
  Menu, Grid, Image, Container,
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
                <Link passHref href="/basswood">
                  Basswood Farm
                </Link>
              </Menu.Item>
              <Grid columns="2">
                <Grid.Column>
                  <Menu.Item>
                    <Link passHref href="/">
                      Home
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link passHref href="/about">
                      About Us
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link passHref href="/contact">
                      Contact Us
                    </Link>
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column>
                  <Menu.Item content="Horse Boarding" />
                  <Menu.Item content="Air BnB" />
                  <Menu.Item content="Experiences" />
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item header as="h3">
                <Link passHref href="/woodhouse">
                  Woodhoouse Homestead
                </Link>
              </Menu.Item>
              <Menu.Item content="CSA" />
              <Menu.Item content="Products" />
              <Menu.Item content="Meet The Goats" />
            </Grid.Column>
            <Grid.Column>
              <Menu.Item header as="h3" content="Connect With Us" />
              <Menu.Item>
                <Link passHref target="blank" href="https://www.instagram.com/woodhousehomestead/">
                  Insgagram
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link passHref href="https://www.facebook.com/pages/Basswood-Farm/156409324399440">
                  Facebook
                </Link>
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <span style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>&copy; Baswood Farm All Rights Reserved.</span>
    </>
  );
}

export default Footer;
