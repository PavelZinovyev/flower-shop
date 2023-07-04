import React, { useState, useRef } from 'react';
import './styles/App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import ProductCard from './components/UI/productCard/ProductCard';
import Modal from './components/UI/modal/Modal';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
        <button onClick={() => setModalActive(true)}>ВЫЗОВ МОДАЛЬНОГО ОКНА</button>
      </div>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
