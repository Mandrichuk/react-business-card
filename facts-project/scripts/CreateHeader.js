export default function CreateHeader() {
  const codeHTML = (
      <header className="header">
      <nav className="nav">
        <img className="react-logo" src="./images/react-logo.webp"/>

        <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      </nav>
      </header>
  );

  return codeHTML;
}
  