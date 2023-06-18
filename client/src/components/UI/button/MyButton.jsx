import React from 'react';
// import classes from '../button/MyButton.module.css';

const MyButton = ({ ...props }) => {
  return <button {...props}>{props.children}</button>;
};

export default MyButton;

// import React, { useState } from 'react';
// import Counter from './Counter';
// import classes from './UI/MyButton.module.css';

// /*
// в слушатель события передаю функцию,
// в которой вызываю функцию для изменения состояния(setCount)
// */

// const MyButton = ({ ...props }) => {
//   return <button>{props.children}</button>;
// };

// {
//   /* <div className={classes.reactionsWrapper}> */
// }
// {
//   /* <div className={classes.myButtonBlock}> */
// }
// {
//   /* <Counter count={count}></Counter> */
// }
// {
//   /* </div> */
// }
// {
//   /* </div> */
// }

// export default MyButton;
