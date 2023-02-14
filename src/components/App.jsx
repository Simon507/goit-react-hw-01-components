import data from './json/user.json';
import { Profile } from './userProfile/Profile';

export const App = () => {
  return (
    <Profile
      username={data.username}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats}
    />
  );
};
