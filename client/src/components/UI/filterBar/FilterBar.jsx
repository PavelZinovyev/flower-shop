import React, { useContext } from 'react';
import './FilterBar.scss';
import FilterBarMenu from '../filterBarMenu/FilterBarMenu';

const FilterBar = () => {
  const items = [
    { value: 'Суккулент' },
    { value: 'Фикусы' },
    { value: 'Цитрусы' },
    { value: 'Хвойные' },
  ];
  return (
    <div className="menu__wrapper">
      <FilterBarMenu header={'Фильтр'} items={items}></FilterBarMenu>
    </div>
  );
};

export default FilterBar;
