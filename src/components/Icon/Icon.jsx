import barbell from '../../assets/icons/barbell.svg'
import meal from '../../assets/icons/meal.svg'
import thought from '../../assets/icons/thought.svg'
import date from '../../assets/icons/date.svg'
import like from '../../assets/icons/like.svg'
import comment from '../../assets/icons/comment.svg'
import follower from '../../assets/icons/follower.svg'
import follow from '../../assets/icons/follow.svg'
import unfollow from '../../assets/icons/unfollow.svg'
import following from '../../assets/icons/following.svg'
import star from '../../assets/icons/star.svg'

const Icon = ({ category }) => {
  const icons = {
    Fitness: barbell,
    Food: meal,
    BlogEntry: thought,
    Date: date,
    Like: like,
    Comment: comment,
    Follower: follower,
    Follow: follow,
    Unfollow: unfollow,
    Following: following,
    Star: star
  }
  return (  
    <img className='icon' src={icons[category]} alt={`a ${category} icon`} />
  )
}

export default Icon
