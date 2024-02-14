import { reviews } from '../../../data/reviews'
import { ScrollRevealing } from '../../ScrollRevealing'
import { ReviewCard } from './ReviewCard'
import styles from './styles.module.css'

export const ReviewsSection = () => {
  return (<>
    <section id='reviews' className='scroll'>
      <div className='container'>
        <ScrollRevealing>
          <h2 className='title h2 text-align'>Reviews</h2>
          <ul className={styles.list}>
            {reviews.map((review, i) => (
              <ReviewCard review={review} i={i} key={i} />
            ))}
          </ul>
        </ScrollRevealing>
      </div>
    </section>
  </>)
}