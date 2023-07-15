import React, { useContext, useState } from 'react';
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
  PROFILE_ROUTE,
} from '../utils/consts';
import pic from '../components/UI/img/logo_plant.svg';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Modal from './UI/modal/Modal';
import Auth from '../pages/Auth';
import { Row, Col } from 'react-bootstrap';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);

  return (
    <nav className="header">
      <Col>
        <div className="header__logo">
          <img src={pic} alt="Image not found"></img>
        </div>
      </Col>
      <Col md={4} className="menu__wrapper">
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
      </Col>
      {/* если пользователь зарегистрирован, то при нажатии на див с человечком открывается профиль пользователя */}
      {/* если пользователь НЕ зарегистрирован, то при нажатии на див с человечком открывается модальное окно с предложением зарегистрироваться */}
      {user.isAuth ? (
        <Col md={7} className="col login-wrap">
          <MyButton onClick={() => user.setAuth(false)}>Выйти из аккаунта</MyButton>
          <NavLink to={ADMIN_ROUTE}>
            <MenuItem className="contacts">Админка</MenuItem>
          </NavLink>
          <NavLink to={PROFILE_ROUTE}>
            <MyButton className="btn-login">
              <i className="fa-regular fa-user"></i>
            </MyButton>
          </NavLink>
        </Col>
      ) : (
        <Col md={7} className="login-wrap">
          <MyButton onClick={() => user.setAuth(true)}>Войти без пароля</MyButton>
          <MyButton
            onClick={() => {
              setModalActive(true);
            }}
            className="btn-login"
          >
            <i className="fa-regular fa-user"></i>
          </MyButton>
        </Col>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        <Auth />
      </Modal>
    </nav>
  );
});

export default NavBar;
