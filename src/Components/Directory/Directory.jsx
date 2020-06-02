import React from 'react';
import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem.jsx'

class Directory extends React.Component{
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'BICYCLES',
        imageUrl: 'https://images.pexels.com/photos/1753137/pexels-photo-1753137.jpeg',
        id: 1,
        linkUrl: 'bicycles'
      },
      {
        title: 'SCOOTERS',
        imageUrl: 'https://images.pexels.com/photos/1642055/pexels-photo-1642055.jpeg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'SKATES',
        imageUrl: 'https://images.pexels.com/photos/2086530/pexels-photo-2086530.jpeg',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'WOMENs',
        imageUrl: 'https://images.pexels.com/photos/3752928/pexels-photo-3752928.jpeg',
        id: 4,
        size: 'large',
        linkUrl: ''
      },
      {
        title: 'MENs',
        imageUrl: 'https://images.pexels.com/photos/2224699/pexels-photo-2224699.jpeg',
        size: 'large',
        id: 5,
        linkUrl: ''
      }]
    };
  }

  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    );
  }
}

export default Directory
