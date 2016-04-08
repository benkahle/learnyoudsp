import React, { Component, PropTypes } from 'react'

export default class KernelView extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(i, j, val) {
    var data = []
    console.log(this.props.data);
    for (let x=0; x<this.props.size; x++) {
      data.push([])
      for (let y=0; y<this.props.size; y++) {
        if (x === i && y === j) {
          data[x].push(val)
        } else if (x >= this.props.data.length || y >= this.props.data.length) {
          //Outside of provided data => zero fill
          data[x].push("0")
        } else {
          data[x].push(this.props.data[x][y])
        }
      }
    }
    this.props.onChange(data);
  }

  onSave() {
    this.props.onSave({size: this.props.size, data: this.props.data})
  }

  render() {
    const rows = this.props.data;
    return (
      <div className="row">
        <div className="col-sm-10 kernel-view">
          {[...Array(this.props.size)].map((x, i) =>
            <div className="kernel-view-row"
              style={{height: 100/this.props.size+"%"}}
              key={i}
              id={i}>
              { [...Array(this.props.size)].map((x, j) =>
                <input
                  className="kernel-input"
                  onChange={(e) => this.onChange(i, j, e.target.value)}
                  style={{width: 100/this.props.size+"%"}}
                  key={j} id={i+","+j}
                  value={i < rows.length ? (j < rows[i].length ? rows[i][j] : 0) : 0}
                >
                </input>
              )}
            </div>
          )}
        </div>
        <div className="col-sm-2 flex-col-reverse">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={this.onSave}
            style={{order: 1}}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
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
