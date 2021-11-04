import './App.css';
import FriendsList from 'components/FriendsList/FriendsList';
import SocialProfile from 'components/SocialProfile/Social-profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import friends from './components/FriendsList/friends.json'
import user from 'components/SocialProfile/user.json'
import statistics from 'components/Statistics/statistical-data.json'
import transactions from 'components/TransactionHistory/transactions.json';


export default function App() {
  return (
    <div className="App">
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={statistics}
      />
      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}
