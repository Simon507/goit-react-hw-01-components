import PropTypes from 'prop-types';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { FriendPhoto } from './FriendListItem.styles';

export const FriendListItem = ({ friend }) => {
  return (
    <>
      {friend.isOnline ? (
        <span className="status  statusOn">OK</span>
      ) : (
        <span className="status statusOff">
          <BsFillPersonLinesFill></BsFillPersonLinesFill>
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
