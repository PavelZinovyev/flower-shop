import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import ItemList from '../components/ItemList';
import FilterBar from '../components/UI/filterBar/FilterBar';

const Shop = () => {
  return (
    <Container>
      <Row className="h1 pt-4">Каталог растений</Row>
      <Row>
        <FilterBar></FilterBar>
      </Row>
      <Col className="d-flex">
        <ItemList></ItemList>
      </Col>
    </Container>
  );
};

export default Shop;
