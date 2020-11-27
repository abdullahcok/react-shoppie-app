import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import Header from './Components/Header/Header.jsx';
import SignIUPage from './Pages/SignIU/SignIUPage.jsx';

import {auth, createUserProfileDocument} from './Firebase/FirebaseUtils'

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    this.setState({
                      currentUser: {
                        id: snapShot.id,
                        ...snapShot.data()
                      }
                    })
                })

            }
            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

    render() {
      return (
          <div>
            <Header currentUser = {this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/signin' component={SignIUPage}/>
            </Switch>
          </div>
      );
    }
}

export default App;
