import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';

import { CreateHeader } from './scripts/CreateHeader.js';
import { CreateMain } from './scripts/CreateMain.js';
import { CreateFooter } from './scripts/CreateFooter.js';



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



const blackThemeHTML = document.getElementById('black-theme');
const whiteThemeHTML = document.getElementById('white-theme');
ReactDOM.render(<CreateApp />, blackThemeHTML);
ReactDOM.render(<CreateApp />, whiteThemeHTML);

const appHTML = document.querySelector('.app-container');
appHTML.classList.add('app-white-theme');

const appFooterHTML = document.querySelector('.footer');
appFooterHTML.classList.add('footer-white-theme');