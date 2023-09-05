// function GetPageHTML() {
//   const page = (
//     <div>
//       <img className="react-logo" src="./images/react-logo.webp"/>
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first relesed in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );

//   return page;
// }

const divMain = document.getElementById('main');
// ReactDOM.render(<GetPageHTML />, divMain);



function GetList() {
  const list = (
    <div>
      <h1>Product Cart</h1>

      <ol>
        <li>Bananas</li>
        <li>Milk</li>
        <li>Nuts</li>
        <li>Apples</li>
        <li>Chocolate</li>
      </ol>
    </div>
  );
  return list;
}

ReactDOM.render(<GetList />, divMain);