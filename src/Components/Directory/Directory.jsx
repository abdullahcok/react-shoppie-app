import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import MenuItem from '../MenuItem/MenuItem'
import {selectDirectorySections} from '../../Redux/Directory/DirectorySelectors'

import { DirectoryContainer } from './Directory.Styles';

const Directory = ({sections}) => (
    <DirectoryContainer>
        {
          sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
     </DirectoryContainer>
    )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
