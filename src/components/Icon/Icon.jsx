import barbell from '../../assets/icons/barbell.svg'
import meal from '../../assets/icons/meal.svg'
import thought from '../../assets/icons/thought.svg'
import date from '../../assets/icons/date.svg'
import like from '../../assets/icons/like.svg'
import comment from '../../assets/icons/comment.svg'

const Icon = ({ category }) => {
  const icons = {
    Fitness: barbell,
    Food: meal,
    BlogEntry: thought,
    Date: date,
    Like: like,
    Comment: comment
  }
  return (  
    <img className='icon' src={icons[category]} alt={`a ${category} icon`} />
  )
}

export default Icon
