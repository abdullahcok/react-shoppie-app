import React from 'react'

import './CollectionPage.scss'
import CollectionItem from '/../Components/CollectionItem/CollectionItem'

import {selectCollection} from '../../Redux/ShopSelectors'

const CollectionPage = ({collection}) => (
  <div className="collection-page">
      <h2>COLLECTION PAGE</h2>

  </div>
)

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.paramsCollectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)
