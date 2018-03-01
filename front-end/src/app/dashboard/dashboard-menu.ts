import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

   { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
  {
    title: 'Toys Store (C4)',
    icon: 'fa fa-gamepad',
    link: '/dashboard/toystore'
  },
  {
    title: 'Cart',
    icon: 'fa fa-cart-arrow-down',
    link: '/dashboard/items'
  }
];
