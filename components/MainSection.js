import React, { PropTypes } from 'react'
import Input from './Input'
import OutputContainer from '../containers/OutputContainer'
import SettingsContainer from '../containers/SettingsContainer'
import SideBar from './SideBar'


const MainSection = () => (
  <div className="row main-section z-depth-1">
    <div className="col-sm-9 main-panel">
      <div className="row">
        <Input />
        <OutputContainer />
      </div>
      <div className="row" style={{marginTop: "10px"}}>
        <SettingsContainer />
      </div>
    </div>
    <SideBar />
  </div>
)

export default MainSection
