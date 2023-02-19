import { GlobalStyle } from './GlobalStyle';

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

import { Statistics } from './statistics/Statistics';
import { Profile } from './userProfile/Profile';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';

import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
