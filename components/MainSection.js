import React, { PropTypes } from 'react'
import Input from './Input'
import Output from './Output'
import Settings from './Settings'

const MainSection = () => (
  <div className="col-sm-12 main-section">
    <div className="row">
      <Input />
      <Output />
    </div>
    <div className="row">
      <Settings />
    </div>
  </div>
)

export default MainSection
