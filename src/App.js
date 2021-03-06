import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import Header from './Components/Header/Header.jsx';
import SignIUPage from './Pages/SignUIPage/SignUIPage.jsx';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.jsx';


import {auth, createUserProfileDocument} from './Firebase/FirebaseUtils'

import {setCurrentUser} from './Redux/User/user-actions'
import {selectCurrentUser} from './Redux/User/user-selector'


class App extends React.Component{

    unsubscribeFromAuth = null

    componentDidMount(){
      const {setCurrentUser} = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                      })
                    })
            }
            setCurrentUser({userAuth})
            
        })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

    render() {
      return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckOutPage}/>
              <Route exact path='/signin'
                            render = {() => this.props.currentUser
                                                  ? ( <Redirect to = '/' />  )
                                                  : (  <SignIUPage />  )
                                              }
                  />
            </Switch>
          </div>
      );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
