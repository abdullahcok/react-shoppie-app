import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../CollectionPreview/CollectionPreview'
import {selectCollectionsForPreview} from '../../Redux/Shop/ShopSelectors'

import { CollectionsOverviewContainer } from './CollectionsOverview.Styles';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
      }
    </CollectionsOverviewContainer>
  </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)
