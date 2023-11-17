import Link from 'next/link';
import React from 'react';
import {
  Menu, Grid, Image, Container, Divider,
} from 'semantic-ui-react';
import generateMenuConfig from '../utils/data/nav';
import MenuLink from './MenuLink';

function Footer() {
  return (
    <div className="footer ">
      <Divider horizontal content="Basswood" />
      <Container>
        <Grid columns="3" padded="vertically">
          <Grid.Row columns="equal" textAlign="center">
            <Grid.Column>
              <Menu.Item className="footHeader" header as="h3">
                <Image spaced="right" src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624712/basswood/general%20website%20images/logo_b6nmjh.png" size="mini" />
                <Link passHref href="/basswood">
                  Basswood Farm
                </Link>
              </Menu.Item>
              <Grid columns="2">
                <Grid.Column>
                  {generateMenuConfig('foot1')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
                <Grid.Column>
                  {generateMenuConfig('foot2')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item className="footHeader" header as="h3">
                <Link passHref href="/woodhouse">
                  Woodhoouse Homestead
                </Link>
              </Menu.Item>
              <Grid columns={2}>
                <Grid.Column>
                  {generateMenuConfig('foot3')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
                <Grid.Column>
                  {generateMenuConfig('foot4')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item className="footHeader contact" header as="h3">
                <Link passHref href="/contact">
                  Connect
                </Link>
              </Menu.Item>
              <Grid columns={2}>
                <Grid.Column>
                  {generateMenuConfig('foot5')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
                <Grid.Column>
                  {generateMenuConfig('foot6')?.map((i) => (
                    <MenuLink href={i.href} name={i.name} tag="footerMenu" />
                  ))}
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <span style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}><strong>&copy; Baswood Farm</strong>&nbsp; All Rights Reserved</span>
    </div>
  );
}

export default Footer;
