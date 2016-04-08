import React, { PropTypes } from 'react'

const Output = () => (
  <div className="col-sm-6">
    <div className="row">
      <div className="col-sm-12">
        <canvas id="output-canvas"></canvas>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 flex-row-reverse">
        <button type="button" className="btn btn-secondary">Set as input</button>
      </div>
    </div>
  </div>
)

export default Output
