import React, { PropTypes } from 'react'
import InputView from './InputView'
import InputOptions from './InputOptions'

const Input = () => (
  <div className="col-sm-6">
    <div className="row">
      <InputView />
    </div>
    <div className="row">
      <InputOptions />
    </div>
  </div>
)

export default Input
