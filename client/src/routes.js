import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ItemPage from './pages/ItemPage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ITEM_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  PROFILE_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: ItemPage,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];
