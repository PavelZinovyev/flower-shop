import { makeAutoObservable } from 'mobx';

export default class ItemStore {
  constructor() {
    this._types = [
      { id: 1, type: 'Succulent' },
      { id: 2, type: 'Ficus' },
    ];

    this._items = [
      {
        id: 1,
        name: 'Echeveria',
        price: 1190,
        img: 'https://www.thespruce.com/thmb/mJjTRS-W8v0odfOvOXcDU3fSp2Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/succulents-1402043-hero-17719e8ed83f41a5bd0ba84f35f4beb9.jpg ',
      },
      {
        id: 2,
        name: 'Benjamine',
        price: 3399,
        img: 'https://static.tildacdn.com/tild3231-3764-4636-b930-613439333535/2-50-700x678.jpg',
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  get types() {
    return this._types;
  }
 
  get items() {
    return this._items;
  }
}
