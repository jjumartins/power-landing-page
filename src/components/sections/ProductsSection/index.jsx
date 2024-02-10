import { products } from '../../../data/products'
import { ProductCard } from './ProductCard'
import styles from './styles.module.css'

export const ProductsSection = () => {
  return (<>
    <section id='products' className='scroll'>
      <div className='container'>
        <h2 className='title h2 text-align'>We create world-class digital products</h2>
        <p className={`paragraph text-align ${styles.text}`}>By information about design the world to the best instructors</p>
        <ul className={styles.list}>
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </ul>
      </div>
    </section>
  </>)
}