const averageRating = (arr) => {
  if(arr.length === 0){
    return "No Reviews"
  }
  let sum = 0
  arr.forEach(review => {
    sum = sum + review.rating
  })
  return sum / arr.length
}

export {averageRating}
