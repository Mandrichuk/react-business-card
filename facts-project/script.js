import React from 'react';
import ReactDOM from 'react-dom';




function CreateMain() {
  const codeHTML  = (
    <main className="main">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first relesed in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

      <h3>Why I like React</h3> 
      <ol>
        <li>It's a popular libary, so i'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </main>
  );

  return codeHTML;
}


function CreateFooter() {
  const codeHTML = (
    <footer className="footer">
      <small class="footer-text">2023 Andrew development. All rights reserved.</small>
    </footer>
  );
  return codeHTML;
}


function CreatePage() {
  return (
    <div>
      <Header />
      <CreateMain />
      <CreateFooter />
    </div>
  );
}



const main = document.getElementById('main');
ReactDOM.render(<CreatePage />, main);
