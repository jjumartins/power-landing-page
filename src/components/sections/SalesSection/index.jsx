import email_icon from '../../../assets/email_icon.png'
import { services } from '../../../data/services'
import { ServiceCard } from './ServiceCard'
import styles from './styles.module.css'

export const SalesSection = () => {
  return (<>
    <section id='services' className='scroll'>
      <div className={`container ${styles.flex}`}>
        <div className={styles.newsletter}>
          <h2 className='title h2 text-align'>How Can We Help You</h2>
          <p className='paragraph text-align'>Follow our newsletter. We will regulary update our latest project and availability.</p>
          <form className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="emailInput"><img src={email_icon} /></label>
              <input type="email" id='emailInput' placeholder='Enter your e-mail address' />
            </div>
            <button className='button'>Subscribe</button>
          </form>
        </div>
        <div>
          <ul className={styles.serviceList}>
            {services.map((service, i) => (
              <ServiceCard service={service} key={i} className={styles.serviceCard}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>)
}