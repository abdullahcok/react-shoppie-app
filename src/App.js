import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentUser} from './Redux/User/user-actions'

import {auth, createUserProfileDocument} from './Firebase/FirebaseUtils'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import Header from './Components/Header/Header.jsx';
import SignIUPage from './Pages/SignIU/SignIUPage.jsx';


class App extends React.Component{

    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }

          setCurrentUser(userAuth);
        });
      }

      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }

    render() {
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
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
