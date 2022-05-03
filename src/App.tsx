import { useState } from 'react';

import Post from './components/Post/Post.component';

import { PostType } from './types/postTypes';

const App = (): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([
    { username: 'user.name1', imageUrl: '/assets/img/burger.png', caption: 'My great caption.' },
    { username: 'user.name1', imageUrl: '/assets/img/burger.png', caption: 'My great caption.' },
    { username: 'user.name1', imageUrl: '/assets/img/burger.png', caption: 'My great caption.' },
    { username: 'user.name1', imageUrl: '/assets/img/burger.png', caption: 'My great caption.' },
    { username: 'user.name1', imageUrl: '/assets/img/burger.png', caption: 'My great caption.' },
  ]);

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header__image"></div>
      </header>
      <div className="app__content">
        {posts.map(
          (post, index) =>
          <Post key={index} username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        )}
      </div>
    </div>
  );
}

export default App;
