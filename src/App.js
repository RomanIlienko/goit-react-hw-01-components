import './App.css';
import FriendsList from 'components/Friend-list/Friends-list';
import SocialProfile from 'components/Social-profile/Social-profile';
import Statistics from 'components/Statistics/Statistics';
import Transactions from 'components/Transaction-history/Transaction';

export default function App() {
  return (
    <div className="App">
      <FriendsList />
      <SocialProfile/>
      <Statistics/>
      <Transactions/>
    </div>
  );
}
