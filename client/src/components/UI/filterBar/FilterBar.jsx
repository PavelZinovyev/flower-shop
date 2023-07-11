import React, { useContext } from 'react';
import './FilterBar.scss';
import FilterBarMenu from '../filterBarMenu/FilterBarMenu';
import { Row, Col } from 'react-bootstrap';

const FilterBar = () => {
  const items = [
    { value: 'Суккулент' },
    { value: 'Фикусы' },
    { value: 'Цитрусы' },
    { value: 'Хвойные' },
  ];
  return (
    <Row className="menu__wrapper">
      <FilterBarMenu header={'Фильтр'} items={items}></FilterBarMenu>
    </Row>
  );
};

export default FilterBar;
