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
      fluid
      style={{ backgroundColor: '#ede7de' }}
    >
      <Link href="/" passHref>
        <Menu.Item header style={{ fontSize: '2em', padding: '.2em' }}>
          <Image style={{ marginRight: '1em' }} src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624712/basswood/general%20website%20images/logo_b6nmjh.png" size="tiny" />
          Basswood Farm
        </Menu.Item>
      </Link>
      <Menu.Menu className="nav-menu" position="right">
        {generateMenuConfig('nav')?.map((i) => (
          <MenuLink tag="navButtons" key={i.name} href={i.href} name={i.name} />
        ))}
        <Dropdown item className="navDropDown" labeled icon="sliders horizontal">
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
