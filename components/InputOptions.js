import React, { PropTypes } from 'react'

const InputOptions = () => (
  <div className="col-sm-12 flex-row space-between">
    <h3>Choose file:</h3>
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary">Upload</button>
      <button type="button" className="btn btn-secondary">From Gallery</button>
    </div>
  </div>
)

export default InputOptions
