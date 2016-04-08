import React, { PropTypes } from 'react'

const Settings = () => (
  <div className="col-sm-12">
    <div className="row flex-row space-between">
      <div className="col-sm-4">
        <div className="setting">
          <h3>Settings:<i className="right fa fa-question-circle"></i></h3>
        </div>
        <div className="setting">
          <span>Speed</span>
        </div>
        <div className="setting">
          <span>Greyscale</span>
        </div>
        <div className="setting">
          <span>Show Kernel</span>
        </div>
        <div className="setting">
          <span>Image Size</span>
        </div>
      </div>
      <div className="col-sm-2 flex-col-reverse">
        <button type="button" className="btn btn-primary">Run</button>
      </div>
    </div>
  </div>
)

export default Settings
