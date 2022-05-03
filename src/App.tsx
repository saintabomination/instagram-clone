import Post from './components/Post/Post.component';

const App = (): JSX.Element =>
  (
    <div className="app">
      <header className="app__header">
        <div className="app__header__image"></div>
      </header>
      <div className="app__content">
        <Post
          username="user.name1"
          imageUrl="/assets/img/burger.png"
          caption="My caption!"
        />
        <Post
          username="user.name1"
          imageUrl="/assets/img/burger.png"
          caption="My caption!"
        />
        <Post
          username="user.name1"
          imageUrl="/assets/img/burger.png"
          caption="My caption!"
        />
        <Post
          username="user.name1"
          imageUrl="/assets/img/burger.png"
          caption="My caption!"
        />
        <Post
          username="user.name1"
          imageUrl="/assets/img/burger.png"
          caption="My caption!"
        />
      </div>
    </div>
  );

export default App;
