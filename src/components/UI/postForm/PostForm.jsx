import React, { useState } from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';
import Description from '../description/Description';
import classes from '../postForm/PostForm.module.css';
import ImageUploader from '../imageUploader/ImageUploader';

const PostForm = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      date: new Date().toLocaleString().slice(0, -3),
      title,
      body,
    };

    props.create(newPost);

    // setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (
    <div className={classes.formWrapper}>
      <form className="inputsForm">
        {/* в useRef() хранится ссылка на дом элемент */}

        <MyInput
          onChange={(event) => {
            if (event.target.value.length > 25) return event.target.value;
            setTitle(event.target.value);
          }} // установка нового состояния
          value={title}
          type="text"
          placeholder=""
        />
        <Description
          value={body}
          maxLength="450"
          placeholder=""
          onChange={(event) => setBody(event.target.value)}
        ></Description>
        <ImageUploader></ImageUploader>
        <MyButton
          disabled={!title && !body}
          className={`floating-button ${title && body ? 'active' : 'disabled'}`}
          onClick={addNewPost}
          type="text"
        >
          Отправить
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
