import React, { PropTypes } from 'react'


const filters = [
  "convolve",
  "greyscale",
  "brightness",
  "threshold"
];

const Settings = (props) => (
  <div>
    <div className="flex-row space-between">
      <div className="col-sm-6">
        <div className="setting">
          <h3>Settings:
            <i type="button" className="right fa fa-question-circle clickable"
              style={{lineHeight: 1.1}}
              data-toggle="modal"
              data-target="#settingsModal">
            </i>
          </h3>
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
      <div className="col-sm-2 flex-col-reverse">
        <button type="button" onClick={props.onRun} className="btn btn-primary">
        {props.runningStatus === "running" ? <i className='fa fa-spinner fa-spin'></i> : "Run"}
        </button>
      </div>
    </div>
  </div>
)

export default Settings
