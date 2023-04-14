import React from 'react';
import { Container, Icon, Menu, Image  } from 'semantic-ui-react';


const Navbar = () => {
      return (
        <Menu
        size='huge'
        borderless 
        style={{ backgroundColor: 'transparent' }} attached='top'>
            <Menu.Item header>
              <Image style={{marginRight: '4px'}} src='/images/logo.png' size="mini"/>
              Basswood Farms
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Contact Us</Menu.Item>
            </Menu.Menu>
        </Menu>
      );
    };

export default Navbar;
