import { reviews } from '../../../data/reviews'
import { ReviewCard } from './ReviewCard'

export const ReviewsSection = () => {
  return (<>
    <section>
      <div className='container'>
        <h2 className='title h2'>Reviews</h2>
        <ul>
          {reviews.map((review, i) => (
            <ReviewCard review={review} key={i} />
          ))}
        </ul>
      </div>
    </section>
  </>)
}