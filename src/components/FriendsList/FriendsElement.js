import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import defaultImage from '../defaultImage.jpg'

function FriendsElement({ id, avatar = defaultImage, name, isOnline }) {
    return (
        <li className={styles.item} key={id}>
            {isOnline ?
            (<span className={styles.online + ' ' + styles.online}></span>) :
            (<span className={styles.online + ' ' + styles.offline}></span>)}
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

FriendsElement.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}