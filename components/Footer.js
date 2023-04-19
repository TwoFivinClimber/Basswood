import React from 'react';
import { Menu } from 'semantic-ui-react';

function Footer() {
  return (
    <Menu
      fluid
      fixed="bottom"
      borderless
      style={{ justifyContent: 'center', bottom: '0' }}
    >
      <Menu.Item centered>
        &copy; Baswood Farm 2023
      </Menu.Item>
    </Menu>
  );
}

export default Footer;
