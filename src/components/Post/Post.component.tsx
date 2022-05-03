import { Avatar } from '@mui/material';

import './Post.styles.css';

type PostProps = {
  username: string;
  imageUrl: string;
  caption: string;
};

const Post = ({ username, imageUrl, caption }: PostProps): JSX.Element =>
  (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
        />
        <h4>{username}</h4>
      </div>
      <img
        className="post__image"
        src={imageUrl}
        alt={username}
      />
      <div className="post__caption">
        <p>
          <strong>{username}</strong> {caption}
        </p>
      </div>
    </div>
  );

export default Post;
