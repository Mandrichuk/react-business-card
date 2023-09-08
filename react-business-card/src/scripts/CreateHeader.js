import userAvatar from '../images/woman-photo.png';

export function CreateHeader() {
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