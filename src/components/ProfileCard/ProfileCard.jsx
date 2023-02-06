import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import defaultProfilePhoto from '../../assets/profile.png'
import Icon from '../Icon/Icon'

const ProfileCard = ({ profile }) => {

  return (  
  <div className={styles.container}>
    <Link to={`/profiles/${profile._id}`} state={profile}>
      <h5>{profile.name}</h5>
    </Link>
    <Link to={`/profiles/${profile._id}`} state={profile}>
      <img className={styles.profilePhoto} src={profile.photo ? profile.photo : defaultProfilePhoto} alt={profile.name} />
    </Link>
    <ul>
      {profile.journeys.map(journey => (
        <Link key={journey._id} to={`/journeys/${journey._id}`}>
          <li>{journey.name}</li>
        </Link>
      ))}
    </ul>
    <div className={styles.profileStats}>
      <span>Member Since: {profile.createdAt.toString().substring(0, 10)}</span>
      <span>
        <Icon category="Fitness" />
        <span>Followers: {profile.followers.length}</span>
      </span>
    </div>
  </div>
  )
}

export default ProfileCard