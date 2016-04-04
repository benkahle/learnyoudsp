import React, { Component, PropTypes } from 'react'

export default class KernelSize extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  getInputValue() {
    return this.refs.select.value
  }

  onChange(e) {
    this.props.onSelect(this.getInputValue())
  }

  render() {
    return (
      <div>
        <span>Size:</span>
        <select
          ref="select"
          onChange={this.onChange}
        >
        {this.props.options.map(option =>
          <option key={option.value} value={option.value}>{option.display}</option>
        )}
        </select>
      </div>
    )
  }

}

KernelSize.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    display: PropTypes.string
  })).isRequired
}