import React from 'react';
import { Home } from './components/Pages/Home/Home';
import { MenuNavigation } from './components/Pages/MenuNavigation/MenuNavigation';



function App() {
  return (

    <div className="App">

      <nav className='Head' >
        <div className="Header">
          <Home></Home>
        </div>
        <div className='MenuNavigation' >
          <MenuNavigation/>
        </div>
      </nav>

      
    
    </div>
  );
}

export default App;
