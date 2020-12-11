import React from 'react'
import {connect} from 'react-redux'

import './CollectionPage.scss'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'

import {selectCollection} from '../../Redux/Shop/ShopSelectors'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h4 className='title'>{title}</h4>
      <div className='items'>
          {
            items.map(item => (
            <CollectionItem key={item.id} item={item} />
            )
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)
