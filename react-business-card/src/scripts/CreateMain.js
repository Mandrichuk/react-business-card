export function CreateMain() {
  const main = (
    <main id='main'>
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