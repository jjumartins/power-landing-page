import white_logo from '../../assets/white_logo.svg'
import github_logo from '../../assets/socials/github_logo.png'
import instagram_logo from '../../assets/socials/instagram_logo.png'
import facebook_logo from '../../assets/socials/facebook_logo.png'

export const Footer = () => {
  return (<>
    <footer>
      <div>
        <div>
          <img src={white_logo} alt='Power Logo' />
          <div>
            <a href='https://www.github.com/'><img src={github_logo} alt='Github Logo' /></a>
            <a href='https://www.instagram.com/'><img src={instagram_logo} alt='Instagram Logo' /></a>
            <a href='https://www.facebook.com/'><img src={facebook_logo} alt='Facebook Logo' /></a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Investors</a></li>
              <li><a href='#'></a>Events</li>
              <li><a href='#'></a>Terms of Use</li>
              <li><a href='#'></a>Privacy policy</li>
            </ul>
            <button>Contact Us</button>
          </div>
          <p>© Power 2024 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </>)
}