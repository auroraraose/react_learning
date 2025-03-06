import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*

Header
    - Logo
    - Nav Items
Body
    -search
    -Restaurant Container
        *Restaurant Card
          - Img
          - Name of Res, Star Rating, Cuisine, Delivery time
Footer
    -Copyright
    -Links
    -Address
    -Contact

*/

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const Header = () => {
  return (
      <div className="header">
          <div className="logo-container"> 
              <img className="logo" src = {viteLogo}/>
          </div>
          <div className="nav-items">
              <ul>
                  <li>HOME</li>
                  <li>About us</li>
                  <li>Contact us</li>
                  {/* <li>Links</li> */}
                  <li>Cart</li>
              </ul>
          </div>
      </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        alt='res-logo'
        src="https://www.shutterstock.com/image-photo/restaurant-food-menu-photos-beer-260nw-2498587241.jpg"
      />
      <h3>Meghanan Foods</h3>
      <h4>4.4 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='Search'>Search</div>
      <div className='res-container'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
      <div class ="app">
          <Header/>
          <Body/>
          {/* Footer */}
      </div>
  )
}

export default AppLayout;
