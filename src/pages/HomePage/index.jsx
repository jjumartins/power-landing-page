import { BannerSection } from '../../components/sections/BannerSection'
import { CompaniesSection } from '../../components/sections/CompaniesSection'
import { ProductsSection } from '../../components/sections/ProductsSection'
import { ReviewsSection } from '../../components/sections/ReviewsSection'
import { SalesSection } from '../../components/sections/SalesSection'
import { DefaultLayout } from '../DefaultLayout'

export const HomePage = () => {
  return (<>
    <DefaultLayout>
      <BannerSection />
      <CompaniesSection />
      <ProductsSection />
      <ReviewsSection />
      <SalesSection />
    </DefaultLayout>
  </>)
}