export const ServiceCard = ({ service }) => {
  return (<>
    <li>
      <img src={service.img} alt='Icon' />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </li>
  </>)
}