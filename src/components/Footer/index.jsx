import white_logo from '../../assets/white_logo.svg'
import github_logo from '../../assets/socials/github_logo.png'
import instagram_logo from '../../assets/socials/instagram_logo.png'
import facebook_logo from '../../assets/socials/facebook_logo.png'
import styles from './styles.module.css'
import { ContactButton } from '../ContactButton'

export const Footer = () => {
  return (<>
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.marketing}>
          <a href='#'><img className={styles.logo} src={white_logo} alt='Power Logo' /></a>
          <div className={styles.socials}>
            <a href='https://www.github.com/'><img src={github_logo} className={styles.socialsIcons} alt='Github Logo' /></a>
            <a href='https://www.instagram.com/'><img src={instagram_logo} className={styles.socialsIcons} alt='Instagram Logo' /></a>
            <a href='https://www.facebook.com/'><img src={facebook_logo} className={styles.socialsIcons} alt='Facebook Logo' /></a>
          </div>
        </div>
        <div className={styles.company}>
          <h3 className='title h3 white'>Company</h3>
          <div className={styles.nav}>
            <ul className={styles.links}>
              <li><a href='#' className='white'>About Us</a></li>
              <li><a href='#' className='white'>Investors</a></li>
              <li><a href='#' className='white'>Events</a></li>
              <li><a href='#' className='white'>Terms of Use</a></li>
              <li><a href='#' className='white'>Privacy policy</a></li>
            </ul>
            <ContactButton />
          </div>
        </div>
        <p className={`paragraph white ${styles.rights}`}>© Power 2024 - All Rights Reserved</p>
      </div>
    </footer>
  </>)
}