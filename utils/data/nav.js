const menuConfig = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Basswood',
    href: '/basswood',
  },
  {
    name: 'Woodhouse',
    href: '/woodhouse',
  },
  {
    name: 'Horse Boarding',
    href: '/boarding',
  },
  {
    name: 'Stay With Us',
    href: '/stayWithUs',
  },
  {
    name: 'CSA',
    href: '/csa',
  },
  {
    name: 'Products',
    href: '/',
  },
  {
    name: 'This Weeks Basket',
    href: '/publicBasket',
  },
  {
    name: 'Meet The Goats',
    href: '/goats',
  },
  // Contact //
  {
    name: 'Contact Us',
    href: '/contact',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/woodhousehomestead/',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/pages/Basswood-Farm/156409324399440',
  },
];

const generateMenuConfig = (dest) => {
  if (dest === 'nav') {
    const select = menuConfig.slice(0, 2);
    return select;
  }
  if (dest === 'dropdown') {
    return menuConfig.slice(0, 6);
  }
  if (dest === 'foot1') {
    return menuConfig.slice(0, 2);
  }
  if (dest === 'foot2') {
    return menuConfig.slice(4, 6);
  }
  if (dest === 'foot3') {
    return menuConfig.slice(6, 8);
  }
  if (dest === 'foot4') {
    return menuConfig.slice(8, 10);
  }
  if (dest === 'foot5') {
    return menuConfig.slice(10, 12);
  }
  if (dest === 'foot6') {
    return [12].map((x) => menuConfig[x]);
  }
  return [];
};

export default generateMenuConfig;
