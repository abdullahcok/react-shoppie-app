import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionsOverview  from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/FirebaseUtils'

import {updateCollections} from '../../Redux/Shop/ShopActions'

import WithSpinner from '../../Components/Spinner/Spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{
  state = {
    loading: true
  }

  unsubscribeFromSnaphot = null

  componentDidMount(){
   const {updateCollections} = this.props;
   const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render(){
    const {match} = this.props
    const {loading} = this.state
    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route exact path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
