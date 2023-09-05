// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));


// ReactDOM.render(<ul><li>text 1</li><li>text 2</li></ul>, document.getElementById('root'));


function MainContent() {
  return (
    <h1>I'm learning React!</h1>
  )
}


// ReactDOM.render(
//   <div>
//     <MainContent />

//   </div>,
// document.getElementById('root'));


// const h1 = document.createElement("h1");
// h1.textContent = 'this is an imprerative way to program';
// h1.className = 'header';
// document.getElementById('root').append(h1);


const navbar = (
  <nav>
    <h1>Sponge</h1>
    <div>
      <ul>
        <li>
          price: 10$
        </li>
        <li>
          about: red sponge
        </li>
        <li>
          contact: whatsup: +390 332 222
        </li>
      </ul>
    </div>
  </nav>
);

ReactDOM.render(navbar, document.getElementById('root'));
