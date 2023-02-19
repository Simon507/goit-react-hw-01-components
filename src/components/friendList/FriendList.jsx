import PropTypes from 'prop-types';

import { Friends } from './FriendList.styles';
import { FrienfdsCard } from './FriendList.styles';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FrienfdsCard className="item" key={friend.id}>
          <FriendListItem friend={friend} />
        </FrienfdsCard>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
