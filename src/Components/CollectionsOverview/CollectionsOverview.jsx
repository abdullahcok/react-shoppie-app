import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './CollectionsOverview.scss'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import {selectCollections} from '../../Redux/Shop/ShopSelectors'

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionsOverview)
