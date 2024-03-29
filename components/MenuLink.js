import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

function MenuLink({ href, name, tag }) {
  return (
    <Link href={href} className={tag} passHref>
      <Menu.Item>{name}</Menu.Item>
    </Link>
  );
}

MenuLink.propTypes = {
  tag: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default MenuLink;
