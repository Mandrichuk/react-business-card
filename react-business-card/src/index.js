import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';

import userAvatar from './images/woman-photo.png';

import twitterIcon from './images/footer/twitter-icon.svg';
import facebookIcon from './images/footer/facebook-icon.svg';
import instagramIcon from './images/footer/instagram-icon.svg';
import linkedinIcon from './images/footer/linkedin-icon.svg';
import githubIcon from './images/footer/github-icon.svg';



function CreateHeader() {
  const header = (
    <header>
      <img className='header__user-avatar' src={userAvatar}/>
      <div className='header__user-name'>
        Laura Smith
      </div>
      <div className='header__user-position'>
        Frontend Developer
      </div>
      <div className='header__user-website'>
        laurasmith.website
      </div>
      <button className='header__email-btn'>
        &#9993; Email
      </button>
    </header>
  );

  return header;
}

function CreateMain() {
  const main = (
    <main>
      <div className='main__user-about'>
        About
        <p className='main__user-about-text'>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className='main__user-interests'>
        Interests
        <p className='main__user-about-text'>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.   Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );

  return main;
}


function CreateFooter() {
  const footer = (
    <footer>
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


function CreateApp() {
  const app = (
    <div className='app-container'>
      <CreateHeader />
      <CreateMain />
      <CreateFooter />
    </div>
  );

  return app;
}

const rootHTML = document.getElementById('root');
ReactDOM.render(<CreateApp />, rootHTML);