const averageRating = (arr) => {
  if(arr.length === 0){
    return "No Reviews"
  }
  let sum = 0
  arr.forEach(review => {
    sum = sum + review.rating
  })
  sum = sum / arr.length
  let rounded = Math.round(sum * 10) / 10
  return rounded
}

export {averageRating}
