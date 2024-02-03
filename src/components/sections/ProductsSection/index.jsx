import { products } from '../../../data/products'
import { ProductCard } from './ProductCard'

export const ProductsSection = () => {
  return (<>
    <section>
      <div className='container'>
        <h2 className='title h2'>We create world-class digital products</h2>
        <p className='paragraph'>By information about design the world to the best instructors</p>
        <ul>
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </ul>
      </div>
    </section>
  </>)
}