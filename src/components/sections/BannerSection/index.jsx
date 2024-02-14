import { useState } from 'react'
import banner from '../../../assets/banner.png'
import styles from './styles.module.css'
import { VideoDialog } from '../../dialogs/VideoDialog'
import { ContactButton } from '../../ContactButton'

export const BannerSection = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (<>
    <section>
      <div className={`container reveal ${styles.flex}`}>
        <div>
          <h1 className='title h1 text-align'>We Design Impactful Digital <span className={styles.highlight}>Products</span></h1>
          <div className={styles.infoBox}>
            <p className={`paragraph text-align ${styles.introduction}`}>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
            <div className={styles.links}>
              <ContactButton />
              <button onClick={() => setIsVideoOpen(true)} type='button' className={styles.videoLink}>
                <p className={styles.play}>▶</p>
                <p className='paragraph'>Watch our introduction video</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <img src={banner} alt='Banner' />
        </div>
      </div>
      <VideoDialog isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
    </section >
  </>)
}