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
    name: 'Contact Us',
    href: '/contact',
  },
  {
    name: 'Horse Boarding',
    href: '/boarding',
  },
  {
    name: 'Air BnB',
    href: '/',
  },
  {
    name: 'Experiences',
    href: '/',
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
    name: 'CSA',
    href: '/csa',
  },
  {
    name: 'Admin',
    href: '/admin',
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
    href: '/',
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
    const select = menuConfig.slice(0, 3);
    return select;
  }
  if (dest === 'dropdown') {
    return menuConfig.slice(3, 6);
  }
  if (dest === 'foot3') {
    return [8, 10].map((x) => menuConfig[x]);
  }
  if (dest === 'foot4') {
    return menuConfig.slice(11, 13);
  }
  if (dest === 'foot5') {
    return menuConfig.slice(-2);
  }
  return [];
};

export default generateMenuConfig;
