import styles from './styles.module.css'

export const ProductCard = ({ product }) => {
  return (<>
    <li className={styles.item}>
      <img src={product.img} alt='Illustrative image' />
      <h3 className='title h3'>{product.name}</h3>
      <p className='paragraph'>{product.description}</p>
    </li>
  </>)
}