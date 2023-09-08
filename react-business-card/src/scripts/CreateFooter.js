import twitterIcon from '../images/footer/twitter-icon.svg';
import facebookIcon from '../images/footer/facebook-icon.svg';
import instagramIcon from '../images/footer/instagram-icon.svg';
import linkedinIcon from '../images/footer/linkedin-icon.svg';
import githubIcon from '../images/footer/github-icon.svg';             

export function CreateFooter() {
  const footer = (
    <footer className='footer'>
      <nav className='footer__nav'>

        <a href='https://www.twitter.com/'>
          <img className='footer__social-icon' src={twitterIcon}></img>
        </a>
        <a href='https://www.facebook.com/'>
          <img className='footer__social-icon' src={facebookIcon}></img>
        </a>
        <a href='https://www.instagram.com/'>
          <img className='footer__social-icon' src={instagramIcon}></img>
        </a>
        <a href='https://www.linkedin.com/'>
          <img className='footer__social-icon' src={linkedinIcon}></img>
        </a>
        <a href='https://www.github.com/'>
          <img className='footer__social-icon' src={githubIcon}></img>
        </a>
      </nav>
    </footer>
  );

  return footer;
}