import React from 'react';
import './Modal.scss';
import { observer } from 'mobx-react-lite';

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        контент модального окна
      </div>
    </div>
  );
}; 

export default Modal;
