import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Row } from 'react-bootstrap';

const TypeBar = observer(() => {
  const { item } = useContext(Context);

  return (
    <Row className="d-flex flex-row">
      {item.types.map((type) => (
        <Card
          key={type.id}
          className="p-3 w-auto"
          style={{ cursor: 'pointer' }}
          onClick={() => item.setSelectedType(type)}
          border={type.id === item.selectedType.id ? 'danger' : 'light'}
        >
          {type.name}
        </Card>
      ))}
    </Row>
  );
});

export default TypeBar;
