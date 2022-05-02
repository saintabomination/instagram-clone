import { Avatar } from '@mui/material';

import './Post.styles.css';

const Post = (): JSX.Element =>
  (
    <div className="post">
      <Avatar
        className="post__avatar"
        alt="user.name1"
      />
      <h3>Author name</h3>
      <div className="post__image"></div>
      <div className="post__caption">
        <p>
          <strong>user.name1</strong> Lorem mollitia ipsa officia obcaecati provident hic molestiae Iste ullam non totam non modi Placeat officia vel natus molestias est.
        </p>
      </div>
    </div>
  );

export default Post;
