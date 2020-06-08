import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import Header from './Components/Header/Header.jsx';
import SignIUPage from './Pages/SignIU/SignIUPage.jsx';



function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignIUPage}/>
        </Switch>
      </div>
  );
}

export default App;
