import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';

import Post from './components/Post/Post.component';

import { db } from './firebase/firebase';

import { PostType } from './types/postTypes';

const App = (): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'posts'), snapshot => {
      snapshot.docs.forEach(
        doc => setPosts([...posts, doc.data() as PostType])  
      );
    });
  }, []);

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
