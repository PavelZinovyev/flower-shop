import React, { useState, useRef } from 'react';
import './styles/App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import MyButton from './components/UI/button/MyButton';
import ProductCard from './components/UI/productCard/ProductCard';
import pic from './components/UI/img/logo_plant.svg';
import AppRouter from './components/AppRouter';

function App() {
  return (
    // <BrowserRouter>
    <AppRouter />
    // </BrowserRouter>

    // {
    /* <div className="App">
        <NavBar>
          <div className="headerLeft">
            <img src={pic} width="60" height="60" alt="sadf"></img>
            <div className="headerInfo">
              <h3>зеленый мир</h3>
              <p>в каждый дом</p>
            </div>
          </div>
          <Menu>
            <MenuItem className="store">МАГАЗИН</MenuItem>
            <MenuItem className="store">кнопка1</MenuItem>
            <MenuItem className="store">кнопка2</MenuItem>
          </Menu>
          <div>
            <MyButton className="btn-login">
              <i className="fa-regular fa-user"></i>
            </MyButton>
          </div>
        </NavBar>
        <div className="content">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div> */
    // }
  );
}

export default App;
