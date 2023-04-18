import React, { useState, useRef } from 'react';
import './styles/App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import PostForm from './components/UI/postForm/PostForm';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import MyButton from './components/UI/button/MyButton';
import ProductCard from './components/UI/productCard/ProductCard';
import pic from './components/UI/img/logo_plant.svg';

function App() {
  // const [posts, setPosts] = useState([]);

  // const createPost = (newPost) => {
  //   setPosts([...posts, newPost]);
  // };

  return (
    <div className="App">
      {/* <div className="posts">  */}
      <NavBar>
        <div className="headerLeft">
          <img src={pic} width="60" height="60" alt="sadf"></img>
          <div className="headerInfo">
            <h3>зеленый мир</h3>
            <p>в каждый дом</p>
          </div>
        </div>
        <Menu>
          <MenuItem className="store">МАГАЗИН</MenuItem>
          <MenuItem className="store">кнопка1</MenuItem>
          <MenuItem className="store">кнопка2</MenuItem>
        </Menu>
        <div>
          <MyButton className="btn-login">
            <i className="fa-regular fa-user"></i>
          </MyButton>
        </div>
      </NavBar>
      <div className="content">
        <h2>ВСЕ ЦВЕТОЧКИ</h2>
        <ProductCard />
        <ProductCard />
        {/* <button className="productCard__cartButton">
          <i class="fas fa-shopping-basket fs-lg me-2"></i>В корзину
        </button> */}
      </div>
      {/* <PostForm create={createPost}></PostForm>
        <PostList posts={posts}></PostList> */}
      {/* </div> */}
    </div>
  );
}

export default App;

// добавить возможность создания поста с помощью ввода в инпут

// добавить реакции:
// символ поиска
// символ доната
// символ мало информации
// состояние поста найден
// состояние поста закрыт
