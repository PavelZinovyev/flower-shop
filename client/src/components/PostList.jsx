import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  console.log(props.posts);
  return (
    <div>
      {props.posts.map((post, id) => (
        <PostItem title={post.title} body={post.body} date={post.date} key={id}></PostItem>
      ))}
    </div>
  );
};

export default PostList;
