import logo from '../../assets/black_logo.svg'
import menu_icon from '../../assets/menu_icon.svg'
import { ContactButton } from '../ContactButton'
import styles from './styles.module.css'
import { useState } from 'react'

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (<>
    <header>
      <div className={`container drop ${styles.header}`}>
        <nav className={styles.nav}>
          <a href='#'><img src={logo} alt='Logo Power' className={styles.logo} /></a>
          <button onClick={toggleOpen} className={styles.menuIcon}>{isOpen ? '✘' : '☰'}</button>
          <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ''}`}>
            <li><a onClick={toggleOpen} href='#'>Home</a></li>
            <li><a onClick={toggleOpen} href='#products'>Products</a></li>
            <li><a onClick={toggleOpen} href='#reviews'>Reviews</a></li>
            <li><a onClick={toggleOpen} href='#services'>Services</a></li>
          </ul>
          <ContactButton className={`${styles.contact} ${isOpen ? styles.open : ''}`}/>
        </nav>
      </div>
    </header>
  </>)
}