import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import classes from './UI/PostItem.module.css';
import Counter from './Counter';

const PostItem = (props) => {
  const [count, setCount] = useState(0);

  const increment = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className={classes.post} key={props.id}>
      <div className="titleWrapper">
        <h1 className={classes.postTitle}>{props.title}</h1>
      </div>
      <div className={classes.postContent}>{props.body}</div>
      <div className="reactionsWrapper">
        <div className="likeButtonWrapper">
          <MyButton className="likeButton" onClick={increment} type="text"></MyButton>
          <Counter count={count}></Counter>
        </div>
      </div>

      <h2 className="dateWrapper">{props.date}</h2>
    </div>
  );
};

export default PostItem;
