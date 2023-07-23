import Link from 'next/link';
import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import generateMenuConfig from '../utils/data/nav';
import MenuLink from './MenuLink';

function Navbar() {
  return (
    <Menu
      size="huge"
      attached="top"
      borderless
    >
      <Link href="/" passHref>
        <Menu.Item header style={{ fontSize: '2em', padding: '.2em' }}>
          <Image style={{ marginRight: '1em' }} src="/images/logo.png" size="tiny" />
          Basswood Farm
        </Menu.Item>
      </Link>

      <Menu.Menu className="nav-menu" position="right">
        {generateMenuConfig('nav')?.map((i) => (
          <MenuLink href={i.href} name={i.name} />
        ))}
        <Dropdown item labeled icon="angle double down">
          <Dropdown.Menu>
            {generateMenuConfig('dropdown')?.map((i) => (
              <MenuLink href={i.href} name={i.name} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
