import React, { PropTypes } from 'react'

const Settings = (props) => (
  <div className="col-sm-12">
    <div className="row flex-row space-between">
      <div className="col-sm-4">
        <div className="setting">
          <h3>Settings:<i className="right fa fa-question-circle"></i></h3>
        </div>
        <div className="setting">
          <span>Speed</span>
           <input className="speed-bar right" type="range" id="speedInput" defaultValue="50"/>
        </div>
        <div className="setting">
          <span>Greyscale</span> <input className="right"type="checkbox"/>
        </div>
        <div className="setting">
          <span>Show Kernel</span> <input className="right" type="checkbox"/>
        </div>
        <div className="setting">
          <span>Image Size</span>
          <select className="right">
            <option defaultValue="360p">360p</option>
            <option defaultValue="480p">480p</option>
            <option defaultValue="720p">720p</option>
            <option defaultValue="1080p">1080p</option>
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
