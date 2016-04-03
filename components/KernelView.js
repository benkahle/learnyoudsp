import React, { Component, PropTypes } from 'react'

export default class KernelView extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(i, j, val) {
    var data = this.props.data.map(row => [...row]);
    data[i][j] = val;
    this.props.onChange(data);
  }

  onSave() {
    this.props.onSave({size: this.props.size, data: this.props.data})
  }

  render() {
    const rows = this.props.data;
    return (
      <div>
        <div className="kernel-view-left">
          {rows.map((row, i) =>
            <div className="kernel-view-row" key={i} id={i}>
              { row.map((col, j) =>
                <input
                  onChange={(e) => this.onChange(i, j, e.target.value)}
                  className="kernel-view-cell" key={j} id={i+","+j}
                  value={col}
                >
                </input>
              )}
            </div>
          )}
        </div>
        <div className="kernel-view-right">
          <button
            onClick={this.props.onSave}
          >
            Save
          </button>
          <button
            onClick={() => {this.props.onClear(this.props.size)}}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }

}

KernelView.propTypes = {
  size: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}
