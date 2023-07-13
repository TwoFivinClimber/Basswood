import Link from 'next/link';
import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

function Navbar() {
  return (
    <Menu
      size="huge"
      borderless
      attached="top"
    >
      <Link href="/" passHref>
        <Menu.Item header style={{ fontSize: '1.5em', padding: '.2em' }}>
          <Image style={{ marginRight: '1em' }} src="/images/logo.png" size="tiny" />
          Basswood Farm
        </Menu.Item>
      </Link>

      <Menu.Menu className="nav-menu" position="right">
        <Link href="/" passHref>
          <Menu.Item>Home</Menu.Item>
        </Link>
        <Link href="/about" passHref>
          <Menu.Item>About Us</Menu.Item>
        </Link>
        <Link href="/contact" passHref>
          <Menu.Item>Contact</Menu.Item>
        </Link>
        <Dropdown item labeled icon="angle double down">
          <Dropdown.Menu>
            <Link passHref href="/">
              <Menu.Item>Home</Menu.Item>
            </Link>
            <Link passHref href="/woodhouse">
              <Menu.Item>Woodhouse</Menu.Item>
            </Link>
            <Link passHref href="admin">
              <Menu.Item>Admin</Menu.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
