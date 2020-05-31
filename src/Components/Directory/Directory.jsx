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
        id: 1
      },
      {
        title: 'SCOOTERS',
        imageUrl: 'https://images.pexels.com/photos/1642055/pexels-photo-1642055.jpeg',
        id: 2
      },
      {
        title: 'SKATES',
        imageUrl: 'https://images.pexels.com/photos/2086530/pexels-photo-2086530.jpeg',
        id: 3
      },
      {
        title: 'WOMENs',
        imageUrl: 'https://images.pexels.com/photos/3752928/pexels-photo-3752928.jpeg',
        size: 'large',
        id: 4
      },
      {
        title: 'MENs',
        imageUrl: 'https://images.pexels.com/photos/3778069/pexels-photo-3778069.jpeg',
        size: 'large',
        id: 5
      }]
    };
  }

  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, size, id}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    )
  }
}

export default Directory
