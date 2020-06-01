import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';



function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </div>
  );
}

export default App;
