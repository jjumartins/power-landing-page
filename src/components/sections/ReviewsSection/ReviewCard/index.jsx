export const ReviewCard = ({ review }) => {
  return (<>
    <li>
      <img src={review.img} alt='Client picture' />
      <div>
        <h3>{review.name}</h3>
        <p>{review.text}</p>
        <p>✪✪✪✪✪</p>
      </div>
    </li>
  </>)
}