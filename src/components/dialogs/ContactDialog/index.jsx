import styles from './styles.module.css'
import email_icon from '../../../assets/email_icon.png'
import person_icon from '../../../assets/person_icon.svg'
import { toast } from 'sonner'
export const ContactDialog = ({ isContactOpen, setIsContactOpen }) => {

  const successSubmit = () => {
    setIsContactOpen(false);
    toast.success("Message sent successfully!")
  }

  return (<>
    {isContactOpen && (
      <dialog open className='dialogBox'>
        <div className='dialogContent drop'>
          <button onClick={() => { setIsContactOpen(false) }} type='button' className='button closeVideo'>Close</button>
          <form onSubmit={successSubmit}>
            <h3 className="title h3">Leve us a message</h3>
            <div className={styles.input}>
              <label htmlFor="nameInput"><img src={person_icon} /></label>
              <input required type="text" id='nameInput' placeholder='Enter your name' />
              <label htmlFor="emailInput"><img src={email_icon} /></label>
              <input required type="email" id='emailInput' placeholder='Enter your e-mail address' />
            </div>
            <div className={styles.textWrapper}>
              <textarea placeholder='Write your message here'></textarea>
            </div>
            <button className='button'>Send message</button>
          </form>
        </div>
      </dialog>
    )}
  </>)
}