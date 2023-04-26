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
      <Menu.Item centered>
        &copy; Baswood Farm 2023
      </Menu.Item>
    </Menu>
  );
}

export default Footer;
