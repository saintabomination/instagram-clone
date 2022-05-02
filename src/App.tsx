import Post from './components/Post/Post.component';

const App = (): JSX.Element =>
  (
    <div className="app">
      <header className="app__header">
        <div className="app__header__image"></div>
      </header>
      <Post />
    </div>
  );

export default App;
