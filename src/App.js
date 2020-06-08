import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import Header from './Components/Header/Header.jsx';



function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
  );
}

export default App;
