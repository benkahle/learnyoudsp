import React, { Component, PropTypes } from 'react'

export default class KernelListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let actionButton = this.props.isRemovable ?
    <i className="pull-xs-right fa fa-remove clickable"
      onClick={() => {this.props.onDelete(this.props.id)}}
    ></i> :
    <i className="pull-xs-right fa fa-question-circle clickable"
      data-toggle="modal"
      data-target={"#kernel"+this.props.name+"Modal"}
    ></i>
    return (
      <button type="button" className="btn btn-secondary"
        onClick={() => {this.props.onClick(this.props.id)}}
      >
        <span className="">
          {this.props.name}
        </span>
        {actionButton}
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
