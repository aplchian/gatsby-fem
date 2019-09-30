import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostsPreview from '../components/post-preview';
export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello!</p>
      <h2>Read My Blog</h2>
      {posts.map(post => {
        return <PostsPreview key={post.slug} post={post} />;
      })}
    </Layout>
  );
};
