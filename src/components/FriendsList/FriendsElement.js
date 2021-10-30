import styles from './FriendsList.module.css';

function FriendsElement({ id, avatar, name, isOnline }) {
    return (
        <li className={styles.item} key={id}>
            {}
            <span className={styles.status}></span>
            <img
                className={styles.avatar}
                src={avatar}
                alt={name}
                width="48"
            />
            <p className={styles.friend_name}>{name}</p>
     </li>
    )
}

export default FriendsElement