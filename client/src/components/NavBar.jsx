import React, { useContext } from 'react';
import Menu from '../components/Menu';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import MyButton from '../components/UI/button/MyButton';
import {
  SHOP_ROUTE,
  REGISTRATION_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  ADMIN_ROUTE,
} from '../utils/consts';
import pic from '../components/UI/img/logo_plant.svg';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <header className="header">
      <div className="headerLeft">
        <img src={pic} width="60" height="60" alt="sadf"></img>
        <div className="headerInfo">
          <NavLink to={SHOP_ROUTE}></NavLink>
        </div>
      </div>
      <Menu>
        <NavLink to={SHOP_ROUTE}>
          <MenuItem className="store">Магазин</MenuItem>
        </NavLink>
        <NavLink to={ABOUT_ROUTE}>
          <MenuItem className="about">О нас</MenuItem>
        </NavLink>
        <NavLink to={CONTACTS_ROUTE}>
          <MenuItem className="contacts">Контакты</MenuItem>
        </NavLink>
      </Menu>
      {user.isAuth ? (
        <div className="login-wrap">
          <NavLink to={ADMIN_ROUTE}>
            <MenuItem className="contacts">Админка</MenuItem>
          </NavLink>
          <NavLink to={REGISTRATION_ROUTE}>
            <MyButton className="btn-login">
              <i className="fa-regular fa-user"></i>
            </MyButton>
          </NavLink>
        </div>
      ) : (
        <div className="login-wrap">
          <NavLink to={REGISTRATION_ROUTE}>
            {/* если пользователь зарегистрирован, то при нажатии на див с человечком открывается профиль пользователя */}
            {/* если пользователь НЕ зарегистрирован, то при нажатии на див с человечком открывается модальное окно с предложением зарегистрироваться */}

            <MyButton onClick={() => user.setAuth(true)} className="btn-login">
              <i className="fa-regular fa-user"></i>
            </MyButton>
          </NavLink>
        </div>
      )}
    </header>
  );
});

export default NavBar;
