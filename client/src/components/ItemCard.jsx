import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ItemCard = ({ item }) => {
  return (
    <Col className="card-col p-0" md={4}>
      <Card style={{ width: 360, cursor: 'pointer' }} border="light">
        <Image width={360} height={450} src={item.img}></Image>
        <div>
          <div className="mt-2">Суккулент</div>
        </div>
      </Card>
    </Col>
  );
};

export default ItemCard;
