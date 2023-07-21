import Link from 'next/link';
import React from 'react';
import {
  Menu, Grid, Image, Container, Divider,
} from 'semantic-ui-react';
import generateMenuConfig from '../utils/data/nav';
import MenuLink from './MenuLink';

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
                  {generateMenuConfig('nav')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} />
                  ))}
                </Grid.Column>
                <Grid.Column>
                  {generateMenuConfig('dropdown')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} />
                  ))}
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
                  {generateMenuConfig('foot3')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} />
                  ))}
                </Grid.Column>
                <Grid.Column>
                  {generateMenuConfig('foot4')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} />
                  ))}
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Menu.Item header as="h3">
                <Link passHref href="/contact">
                  Connect With Us
                </Link>
              </Menu.Item>
              {generateMenuConfig('foot5')?.map((i) => (
                <MenuLink href={i.href} name={i.name} />
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <span style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>&copy; Baswood Farm All Rights Reserved.</span>
    </div>
  );
}

export default Footer;
