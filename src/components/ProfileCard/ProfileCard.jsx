import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import defaultProfilePhoto from '../../assets/profile.png'
import Icon from '../Icon/Icon'

const ProfileCard = ({ profile }) => {
  const formattedDate = new Date(profile.createdAt).toLocaleDateString()
  
  return (  
  <div className={styles.container}>
    <Link to={`/profiles/${profile._id}`} state={profile}>
      <h2>{profile.name}</h2>
    </Link>
    <Link to={`/profiles/${profile._id}`} state={profile}>
      <img className={styles.profilePhoto} src={profile.photo ? profile.photo : defaultProfilePhoto} alt={profile.name} />
    </Link>
    <h3>Current Journeys:</h3>
      {profile.journeys.map(journey => (
        <Link key={journey._id} to={`/journeys/${journey._id}`}>
          <p>{journey.name}</p>
        </Link>
      ))}
    <div className={styles.profileStats}>
      <p>Member Since: {formattedDate}</p>
      <p>
        <Icon category="Follower" />   {profile.followers.length}
      </p>
    </div>
  </div>
  )
}

export default ProfileCard
