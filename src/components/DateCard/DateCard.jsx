const DateCard = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString()
  return (  
    <div>
      <p><strong>Date Created:</strong> {formattedDate}</p>
    </div>
  )
}

export default DateCard
