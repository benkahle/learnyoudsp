import React, { PropTypes } from 'react'
import Input from './Input'
import OutputContainer from '../containers/OutputContainer'
import SettingsContainer from '../containers/SettingsContainer'


const MainSection = () => (
  <div className="row main-section z-depth-1">
    <div className="col-sm-12">
      <div className="row">
        <Input />
        <OutputContainer />
      </div>
      <div className="row">
        <SettingsContainer />
      </div>
    </div>
  </div>
)

export default MainSection
