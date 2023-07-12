import React, { useState, useRef } from 'react';
import './styles/App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import ProductCard from './components/UI/productCard/ProductCard';
import Modal from './components/UI/modal/Modal';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <BrowserRouter>
      <Container className="App">
        <NavBar></NavBar>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
