import React from 'react';
import { Container, Form, Row, Card, Button } from 'react-bootstrap';

import { NavLink, useLocation } from 'react-router-dom';

import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  // console.log('location-->', location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите email" className="mt-3"></Form.Control>
        </Form>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите пароль" className="mt-3"></Form.Control>
        </Form>
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin ? (
            <div>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
            </div>
          )}
          <Button variant="outline-success" className="mt-2">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
