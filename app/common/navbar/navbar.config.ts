import { MenuType, RouteInfo } from './navbar.common';

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Company Name', menuType: MenuType.BRAND },
    { path: 'home', title: 'Heroes', menuType: MenuType.LEFT },
    { path: 'home', title: 'About Us', menuType: MenuType.RIGHT },
    { path: 'home', title: 'Contact', menuType: MenuType.RIGHT }
];