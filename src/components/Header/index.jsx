import logo from '../../assets/black_logo.svg'

export const Header = () => {
  return (<>
    <header>
      <div>
        <a href='#'><img src={logo} alt='Logo Power' /></a>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Ratings</a></li>
            <li><a href='#'>Services</a></li>
          </ul>
        </nav>
        <button>Contact Us</button>
      </div>
    </header>
  </>)
}