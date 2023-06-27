import Link from 'next/link';
import React from 'react';
import { Menu } from 'semantic-ui-react';

function Footer() {
  return (
    <Menu
      attached="bottom"
      fluid
      size="tiny"
      borderless
      style={{ justifyContent: 'center' }}
    >
      <Menu.Item>
        &copy; Baswood Farm All Rights Reserved.
      </Menu.Item>
      <Menu.Item>
        <Link href="/admin" passHref>
          Admin Login
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Footer;
