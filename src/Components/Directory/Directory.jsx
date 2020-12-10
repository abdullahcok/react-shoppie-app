import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem'
import {selectDirectorySections} from '../../Redux/Directory/DirectorySelectors'

const Directory = ({sections}) => (
      <div className="directory-menu">
        {
          sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
