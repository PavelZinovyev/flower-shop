import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import ItemCard from './UI/itemCard/ItemCard';
import ProductCard from './UI/productCard/ProductCard';

const ItemList = observer(() => {
  const { item } = useContext(Context);

  // след раз:

  // переделать навбар
  // добавить сепаратор через каждые 3 карточки
  // починить пагинатор у продукта
  // подумать над кнопкой фильтр

  return (
    <Row className="d-flex mt-2">
      {item.items.map((item, i) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Row>
  );
});

export default ItemList;
