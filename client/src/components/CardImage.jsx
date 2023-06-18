import React from 'react';
import cardImg3 from './img/card_flower/echeveria_3.jpeg';

const CardImage = () => {
  return (
    <div className="image-switch__item">
      <div className="image-switch__img">
        <img src={cardImg3} alt="Суккулент"></img>
      </div>
    </div>
  );
};

export default CardImage;
