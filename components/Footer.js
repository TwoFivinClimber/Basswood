import Link from 'next/link';
import React from 'react';
import {
  Menu, Grid, Image, Container, Divider,
} from 'semantic-ui-react';

function Footer() {
  return (
    <div style={{
      bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', right: '0', left: '0', marginTop: '5em',
    }}
    >
      <Divider horizontal content="Basswood" />
      <Container>
        <Grid columns="3" padded="vertically">
          <Grid.Row>
            <Grid.Column width={6}>
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
            <Grid.Column width={6}>
              <Menu.Item header as="h3">
                <Link passHref href="/woodhouse">
                  Woodhoouse Homestead
                </Link>
              </Menu.Item>
              <Grid columns={2}>
                <Grid.Column>
                  <Menu.Item>
                    <Link passHref href="/csa">
                      CSA
                    </Link>
                  </Menu.Item>
                  <Menu.Item content="Products" />
                </Grid.Column>
                <Grid.Column>
                  <Link passHref href="/publicBasket">
                    <Menu.Item>
                      This Weeks Basket
                    </Menu.Item>
                  </Link>
                  <Menu.Item content="Meet The Goats" />
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
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
    </div>
  );
}

export default Footer;
