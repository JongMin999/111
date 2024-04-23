import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';

const PostMain = props => {
  return (
    <>
      <h2 align="center" style={{ marginTop: '50px', fontSize: '32px' }}>게시판</h2>
      <PostList />
    </>
  );
}

export default PostMain;