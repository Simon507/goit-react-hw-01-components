import PropTypes from 'prop-types';
import { UserProfile } from './Profile.styles';
import { UserDescription } from './Profile.styles';
import { UserPhoto } from './Profile.styles';
import { Name } from './Profile.styles';
import { Stats } from './Profile.styles';
import { Label } from './Profile.styles';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile className="profile">
      <UserDescription className="description">
        <UserPhoto
          src={avatar}
          alt="User avatar"
          className="avatar"
        ></UserPhoto>
        <Name className="name">{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </UserDescription>

      <Stats className="stats">
        <li>
          <Label className="label">Followers:</Label>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <Label className="label">Views:</Label>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <Label className="label">Likes:</Label>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
