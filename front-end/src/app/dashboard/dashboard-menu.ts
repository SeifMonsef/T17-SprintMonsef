import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
  {
    title: 'Store',
    icon: 'fa fa-shopping-bag',
    children: [
      {
    title: 'Toys Store (C4)',
    icon: 'fa fa-gamepad',
    link: '/dashboard/toystore'
  }],
  },
  {
    title: 'Auth',
    icon: 'fa fa-lock',
    children:[{
      title: 'Login',
      icon: 'fa fa-sign-in',
      link: '/dashboard/authe/login',
    },{
      title: 'Sign Up',
      icon: 'fa fa-user-plus',
      link: '/dashboard/authe/signup',
    }]
  }
];
