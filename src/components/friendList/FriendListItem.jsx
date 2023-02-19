import PropTypes from 'prop-types';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { FriendPhoto } from './FriendListItem.styles';
import { Status } from './FriendListItem.styles';

export const FriendListItem = ({ friend }) => {
  return (
    <>
      {friend.isOnline ? (
        <Status className="status">
          <BsFillPersonLinesFill
            style={{ fill: 'green' }}
          ></BsFillPersonLinesFill>
        </Status>
      ) : (
        <span className="status">
          <BsFillPersonLinesFill
            style={{ fill: 'red' }}
          ></BsFillPersonLinesFill>
        </span>
      )}

      <FriendPhoto
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      ></FriendPhoto>
      <p className="name">{friend.name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
