import React from 'react'
import {connect} from 'react-redux'

import CollectionItem from '../../Components/CollectionItem/CollectionItem'

import {selectCollection} from '../../Redux/Shop/ShopSelectors'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.Styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)
