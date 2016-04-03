import React, { Component, PropTypes } from 'react'

export default class KernelListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>[]</span>
        <span
          onClick={() => {this.props.onClick(this.props.id)}}
        >
          {this.props.name}
        </span>
        {this.props.isRemovable &&
          <span
            onClick={() => {this.props.onDelete(this.props.id)}}
          >X</span>}
      </div>
    )
  }

}

KernelListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  help: PropTypes.bool.isRequired,
  isRemovable: PropTypes.bool.isRequired
}
