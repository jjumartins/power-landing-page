import google_logo from '../../../assets/companies/google_logo.svg'
import airbnb_logo from '../../../assets/companies/airbnb_logo.svg'
import creative_logo from '../../../assets/companies/creative_logo.svg'
import shopify_logo from '../../../assets/companies/shopify_logo.svg'
import amazon_logo from '../../../assets/companies/amazon_logo.svg'
import styles from './styles.module.css'

export const CompaniesSection = () => {
  return (<>
    <section>
      <div className='container' >
        <h3 className={`title h3 ${styles.title}`}>Trusted By Greatest Companies</h3>
        <div className={styles.companies}>
          <img src={google_logo} className={styles.logo} alt='Google Logo' />
          <img src={airbnb_logo} className={styles.logo} alt='Airbnb Logo' />
          <img src={creative_logo} className={styles.logo} alt='Creative Logo' />
          <img src={shopify_logo} className={styles.logo} alt='Shopify Logo' />
          <img src={amazon_logo} className={styles.logo} alt='Amazon Logo' />
        </div>
      </div>
    </section>
  </>)
}