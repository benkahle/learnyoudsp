import React, { PropTypes } from 'react'
import Input from './Input'
import Output from './Output'
import Settings from './Settings'

const MainSection = () => (
  <div className="row main-section z-depth-1">
    <div className="col-sm-12">
      <div className="row">
        <Input />
        <Output />
      </div>
      <div className="row">
        <Settings />
      </div>
    </div>
  </div>
)

export default MainSection
