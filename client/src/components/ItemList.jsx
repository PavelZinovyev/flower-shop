import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import ItemCard from './UI/itemCard/ItemCard';

const ItemList = observer(() => {
  const { item } = useContext(Context);

  return (
    <Row className="d-flex mt-2">
      {item.items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Row>
  );
});

export default ItemList;
