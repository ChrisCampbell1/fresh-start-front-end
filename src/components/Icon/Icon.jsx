import barbell from '../../assets/icons/barbell.svg'
import meal from '../../assets/icons/meal.svg'
import thought from '../../assets/icons/thought.svg'

const Icon = ({ category }) => {
  const icons = {
    barbell,
    meal,
    thought
  }
  return (  
    <img className='icon' src={icons[category]} alt={`a ${category} icon`} />
  )
}

export default Icon
