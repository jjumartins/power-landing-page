import styles from './styles.module.css'
import { useState } from 'react'

export const ReviewCard = ({ review }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (<>
    <li className={styles.item}>
      <div className={styles.header}>
        <img src={review.img} alt='Client picture' />
        <h3 className='title h3'>{review.name}</h3>
      </div>
      <div className={isExpanded ? styles.expanded : styles.collapsed}>
        <p className={`paragraph`}>{review.text}</p>
        <button className={styles.readMore} onClick={() => setIsExpanded(!isExpanded)} >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
        <p className={styles.rating}>✪✪✪✪✪</p>
    </li>
  </>)
}