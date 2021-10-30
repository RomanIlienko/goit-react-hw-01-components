import styles from './FriendsList.module.css';
import FriendsElement from './FriendsElement'

function FriendsList({ friends }) {
    return (
        <ul className={styles.friend_list}>
            {friends.map(friend => (
                <FriendsElement
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};
 
export default FriendsList

 