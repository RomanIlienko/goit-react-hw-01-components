import styles from './SocialProfile.module.css'
import defaultImage from '../defaultImage.jpg'

export default function SocialProfile({
    name,
    tag,
    location,
    avatar = defaultImage,
    followers = 'unknown',
    views = 'unknown',
    likes = 'unknown'
    }) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <div className={styles.position_img}>
                <img
                    src={avatar}
                    alt={name}
                    className={styles.avatar}
                    />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}> {followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}> {views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}> {likes}</span>
                </li>
            </ul>
        </div>
    )
}

