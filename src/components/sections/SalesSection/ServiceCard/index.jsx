import styles from './styles.module.css'

export const ServiceCard = ({ service }) => {
  return (<>
    <li className={styles.item}>
      <img src={service.img} alt='Icon' />
      <h3 className='title h3'>{service.name}</h3>
      <p className='paragraph'>{service.description}</p>
    </li>
  </>)
}