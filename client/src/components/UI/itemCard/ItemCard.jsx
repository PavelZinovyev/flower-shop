import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './ItemCard.scss';

const ItemCard = ({ item }) => {
  return (
    <Col className="card-col p-0" md={4}>
      <Card className="card" border="light">
        <Image width={360} height={450} src={item.img}></Image>
        <div>
          <div className="mt-2 item__name">{item.name}</div>
          <div className="card__price">{`${item.price} р.`}</div>
        </div>
      </Card>
    </Col>
  );
};

export default ItemCard;
