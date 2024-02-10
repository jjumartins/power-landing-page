import banner from '../../../assets/banner.png'
import styles from './styles.module.css'

export const BannerSection = () => {
  return (<>
    <section>
      <div className={`container ${styles.flex}`}>
        <div>
          <h1 className='title h1 text-align'>We Design Impactful Digital <span className={styles.highlight}>Products</span></h1>
          <div className={styles.infoBox}>
            <p className={`paragraph text-align ${styles.introduction}`}>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
            <div className={styles.links}>
              <button className='button'>Contact Us</button>
              <a href='https://www.youtube.com/' className={styles.videoLink}>
                <p className={styles.play}>▶</p>
                <p className='paragraph'>Watch our introduction video</p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <img src={banner} alt='Banner' />
        </div>
      </div>
    </section >
  </>)
}