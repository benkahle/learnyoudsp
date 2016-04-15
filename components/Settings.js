import React, { PropTypes } from 'react'


const filters = [
  "convolve",
  "greyscale",
  "brightness",
  "threshold"
];

const Settings = (props) => (
  <div className="col-sm-12">
    <div className="row flex-row space-between">
      <div className="col-sm-4">
        <div className="setting">
          <h3>Settings:<i className="right fa fa-question-circle"></i></h3>
        </div>
        <div className="setting">
          <span>Filter:</span>
          <select
          className="right"
          onChange={props.onChangeFilter}
          value={props.filter}
          >
          {filters.map(option =>
            <option key={option} value={option}>{option}</option>
          )}
          </select>
        </div>
      </div>
      <div className="col-sm-1 flex-col-reverse">
        <button type="button" onClick={props.onRun} className="btn btn-primary">
        {props.runningStatus === "running" ? <i className='fa fa-spinner fa-spin'></i> : "Run"}
        </button>
      </div>
    </div>
  </div>
)

export default Settings
