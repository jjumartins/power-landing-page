export const ProductCard = ({ product }) => {
  return (<>
    <li>
      <img src={product.img} alt='Illustrative image' />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </li>
  </>)
}