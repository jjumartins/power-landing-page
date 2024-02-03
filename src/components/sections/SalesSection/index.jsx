import email_icon from '../../../assets/email_icon.png'
import { services } from '../../../data/services'
import { ServiceCard } from './ServiceCard'

export const SalesSection = () => {
  return (<>
    <section>
      <div className='container'>
        <div>
          <h2 className='title h2'>How Can We Help You</h2>
          <p className='paragraph'>Follow our newsletter. We will regulary update our latest project and availability.</p>
          <form>
            <label htmlFor="emailInput"><img src={email_icon} /></label>
            <input type="email" id='emailInput' />
            <button className='button'>Subscribe</button>
          </form>
        </div>
        <div>
          <ul>
            {services.map((service, i) => (
              <ServiceCard service={service} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>)
}