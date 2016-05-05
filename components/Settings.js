import React, { Component, PropTypes } from 'react'

const filters = [
  "convolve",
  "greyscale",
  "brightness",
  "threshold"
];

class Settings extends Component {
  constructor(props) {
    super(props)
    this.setBrightness = this.setBrightness.bind(this)
    this.setThreshold = this.setThreshold.bind(this)
  }

  setBrightness(value) {
    this.props.onChangeFilterSettings("brightness", value)
  }

  setThreshold(value) {
    this.props.onChangeFilterSettings("threshold", value)
  }

  render() {
    let brightnessSettings = (
      <div className="setting">
        <label htmlFor="brightness">Brightness:</label>
        <input className="right setting-range"
          id="brightness"
          type="range" min="-128" max="128" step="1"
          value={this.props.brightnessSettings}
          onChange={(evt) => this.setBrightness(evt.target.value)}/>
        <output className="right setting-value" htmlFor="brightness">
          {this.props.brightnessSettings}
        </output>
      </div>
    )
    let thresholdSettings = (
      <div className="setting">
        <label htmlFor="threshold">Cutoff:</label>
        <input className="right setting-range"
          id="threshold"
          type="range" min="0" max="256" step="1"
          value={this.props.thresholdSettings}
          onChange={(evt) => this.setThreshold(evt.target.value)}/>
        <output className="right setting-value" htmlFor="threshold">
          {this.props.thresholdSettings}
        </output>
      </div>
    )
    let settings = "";
    switch (this.props.filter) {
      case "brightness":
        settings = brightnessSettings;
        break;
      case "threshold":
        settings = thresholdSettings;
        break
      default:
        break;
    }

    return (
      <div>
        <div className="flex-row space-between">
          <div className="col-sm-6">
            <div className="setting">
              <h3>Filter Mode:
                <i type="button" className="fa fa-question-circle clickable"
                  style={{lineHeight: 1.1, marginLeft: "15px"}}
                  data-toggle="modal"
                  data-target="#settingsModal">
                </i>
              </h3>
            </div>
            <div className="setting">
              <span>Filter:</span>
              <select
              className="right"
              onChange={this.props.onChangeFilter}
              value={this.props.filter}
              >
              {filters.map(option =>
                <option key={option} value={option}>{option}</option>
              )}
              </select>
            </div>
            {settings}
          </div>
          <div className="col-sm-2 flex-col-reverse">
            <button type="button" onClick={this.props.onRun} className="btn btn-primary">
            {this.props.runningStatus === "running" ? <i className='fa fa-spinner fa-spin'></i> : "Run"}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
