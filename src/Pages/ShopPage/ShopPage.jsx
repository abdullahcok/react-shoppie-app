import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionsOverview  from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/FirebaseUtils'

import {updateCollections} from '../../Redux/Shop/ShopActions'

class ShopPage extends React.Component{
  unsubscribeFromSnaphot = null

  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef =  firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render(){
    const {match} = this.props
    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage } />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
