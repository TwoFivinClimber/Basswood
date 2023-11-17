import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

function MenuLink({ href, name, tag }) {
  return (
    <Link href={href} passHref>
      <Menu.Item className={tag}> {name} </Menu.Item>
    </Link>
  );
}

MenuLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

MenuLink.defaultProps = {
  tag: null,
};
export default MenuLink;
