import React, { PropTypes } from 'react'

const HistoryListItem = ({index, url, onDelete, onSetInputUrl}) => (
  <div className="history-item flex-col card-1">
    <i className="fa fa-remove fa-lg right history-delete" onClick={(evt) => {onDelete(index)}}></i>
    <img src={url}/>
    <div className="btn-group history-item-buttons" role="group">
      <button type="button" className="btn btn-secondary btn-sm">Download</button>
      <button type="button" onClick={(evt) => {onSetInputUrl(url)}}
        className="btn btn-secondary btn-sm">
        Set as Input
      </button>
    </div>
  </div>
)

export default HistoryListItem
