import React, { PropTypes } from 'react'
import InputViewContainer from '../containers/InputViewContainer'
import InputOptionsContainer from '../containers/InputOptionsContainer'

const Input = () => (
  <div className="col-sm-6">
    <div className="row">
      <InputViewContainer />
    </div>
    <div className="row">
      <InputOptionsContainer/>
    </div>
  </div>
)

export default Input
