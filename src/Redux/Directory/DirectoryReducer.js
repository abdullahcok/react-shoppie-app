const INITIAL_STATE = {
      sections: [{
        title: 'BICYCLES',
        imageUrl: 'https://images.pexels.com/photos/1753137/pexels-photo-1753137.jpeg',
        id: 1,
        linkUrl: 'shop/bicycles'
      },
      {
        title: 'SCOOTERS',
        imageUrl: 'https://images.pexels.com/photos/1642055/pexels-photo-1642055.jpeg',
        id: 2,
        linkUrl: 'shop/scooters'
      },
      {
        title: 'SKATES',
        imageUrl: 'https://images.pexels.com/photos/2086530/pexels-photo-2086530.jpeg',
        id: 3,
        linkUrl: 'shop/skates'
      },
      {
        title: 'WOMENs',
        imageUrl: 'https://images.pexels.com/photos/3752928/pexels-photo-3752928.jpeg',
        id: 4,
        size: 'large',
        linkUrl: 'shop/womens'
      },
      {
        title: 'MENs',
        imageUrl: 'https://images.pexels.com/photos/2224699/pexels-photo-2224699.jpeg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
        return state;
  }
}


export default directoryReducer
