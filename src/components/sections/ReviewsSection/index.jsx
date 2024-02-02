import { reviews } from '../../../data/reviews'
import { ReviewCard } from './ReviewCard'

export const ReviewsSection = () => {
  return (<>
    <section>
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, i) => (
            <ReviewCard review={review} key={i} />
          ))}
        </ul>
      </div>
    </section>
  </>)
}