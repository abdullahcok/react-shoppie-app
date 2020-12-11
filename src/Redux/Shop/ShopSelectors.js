import {createSelector} from 'reselect'

const COLLECTION_ID_MAP = {
    bicycles:1,
    scooters: 2,
    skates: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)


export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections =>
        // collections[collectionUrlParam]
            collections.find(
                  collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
        )
