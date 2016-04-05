import React, { Component, PropTypes } from 'react'

export default class KernelListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type="button" className="row btn btn-secondary"
        onClick={() => {this.props.onClick(this.props.id)}}
      >
        <span className="col-sm-10">
          {this.props.name}
        </span>
        {this.props.isRemovable &&
          <i className="col-sm-1 pull-xs-right fa fa-remove"
            onClick={() => {this.props.onDelete(this.props.id)}}
          ></i>}
      </button>
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
