import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx';

const BicyclePage = () => {
   return(
     <div>
      <h1>BICYCLES</h1>
     </div>
   );
};
const ScooterPage = () => {
   return(
     <div>
      <h1>SCOOTERS</h1>
     </div>
   );
};
const SkatePage = () => {
   return(
     <div>
      <h1>SKATES</h1>
     </div>
   );
};
const WomenPage = () => {
   return(
     <div>
      <h1>WOMENs</h1>
     </div>
   );
};
const MenPage = () => {
   return(
     <div>
      <h1>MENs</h1>
     </div>
   );
};



function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/bicycles' component={BicyclePage}/>
        <Route path='/scooters' component={ScooterPage}/>
        <Route path='/skates' component={SkatePage}/>
        <Route path='/womens' component={WomenPage}/>
        <Route path='/mens' component={MenPage}/>
      </div>
  );
}

export default App;
