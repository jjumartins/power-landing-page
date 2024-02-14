import email_icon from '../../../assets/email_icon.png'
import { services } from '../../../data/services'
import { ScrollRevealing } from '../../ScrollRevealing'
import { ServiceCard } from './ServiceCard'
import styles from './styles.module.css'
import { toast } from 'sonner'

export const SalesSection = () => {

  const successSubmit = (event) => {
    event.preventDefault()
    toast.success("You are now subscribed!")
  }

  return (<>
    <section id='services' className='scroll'>
      <ScrollRevealing>
        <div className={`container ${styles.flex}`}>
          <div className={styles.newsletter}>
            <h2 className='title h2 text-align'>How Can We Help You</h2>
            <p className='paragraph text-align'>Follow our newsletter. We will regulary update our latest project and availability.</p>
            <form onSubmit={successSubmit} className={styles.form}>
              <div className={styles.input}>
                <label htmlFor="emailInput"><img src={email_icon} /></label>
                <input required type="email" id='emailInput' placeholder='Enter your e-mail address' />
              </div>
              <button className='button'>Subscribe</button>
            </form>
          </div>
          <div>
            <ul className={styles.serviceList}>
              {services.map((service, i) => (
                <ServiceCard service={service} key={i} className={styles.serviceCard} />
              ))}
            </ul>
          </div>
        </div>
      </ScrollRevealing>
    </section>
  </>)
}