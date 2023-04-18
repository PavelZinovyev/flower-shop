import React from 'react';
import './ProductCard.scss';
import cardImg1 from './img/card_flower/echeveria_1.jpeg';
import cardImg2 from './img/card_flower/echeveria_2.jpeg';
import cardImg3 from './img/card_flower/echeveria_3.jpeg';

let currentItem;
const images = [cardImg1, cardImg2, cardImg3];
const paginations = [];
const needPaginations = images.length > 1;

const paginationActive = (event) => {
  if (needPaginations) {
    paginations.forEach((item) => item.ref.current.classList.remove('active'));
    const hoverImageIndex = event.currentTarget.dataset.index;

    if (currentItem) currentItem.ref.current.classList.remove('active');

    currentItem = paginations.find((item) => {
      return item.props['data-index'] == hoverImageIndex;
    });

    currentItem.ref.current.classList.add('active');
  }
};

const paginationReset = (event) => {
  if (needPaginations) {
    paginations.forEach((item) => item.ref.current.classList.remove('active'));
    paginations[0].ref.current.classList.add('active');
  }
};

class ProductCard extends React.Component {
  element = React.createRef();

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="product">
        <a href="#" className="product__image">
          <div className="product__switch image-switch">
            {images.map((src, i) => {
              return (
                <div
                  className="image-switch__item"
                  onMouseEnter={paginationActive}
                  onMouseOut={paginationReset}
                  data-index={i}
                  key={src}
                >
                  <div className="image-switch__img">
                    <img src={src} alt="Суккулент"></img>
                  </div>
                </div>
              );
            })}
          </div>
          <ul className="product__image-pagination image-pagination" aria-hidden="true">
            {needPaginations
              ? images.map((num, i) => {
                  const item = (
                    <li
                      className={`image-pagination__item ${i === 0 ? 'active' : ''}`}
                      data-index={i}
                      ref={React.createRef(i)}
                      key={num}
                    ></li>
                  );
                  paginations.push(item);

                  return item;
                })
              : null}
          </ul>
        </a>
        <h3 className="product__title">
          <a href="#">Эчеверия</a>
        </h3>
        <div className="product-price">
          <span className="product-price__current">500RUB.</span>
          <span className="product-price__old">800RUB.</span>
        </div>
        <button className="product__cart_button">Добавить в корзину</button>
      </article>
    );
  }
}

export default ProductCard;
