import google_logo from '../../../assets/companies/google_logo.svg'
import airbnb_logo from '../../../assets/companies/airbnb_logo.svg'
import creative_logo from '../../../assets/companies/creative_logo.svg'
import shopify_logo from '../../../assets/companies/shopify_logo.svg'
import amazon_logo from '../../../assets/companies/amazon_logo.svg'

export const CompaniesSection = () => {
  return (<>
    <section>
      <div>
        <h3>Trusted By Greatest Companies</h3>
        <div>
          <img src={google_logo} alt='Google Logo' />
          <img src={airbnb_logo} alt='Airbnb Logo' />
          <img src={creative_logo} alt='Creative Logo' />
          <img src={shopify_logo} alt='Shopify Logo' />
          <img src={amazon_logo} alt='Amazon Logo' />
        </div>
      </div>
    </section>
  </>)
}