import React, { PropTypes } from 'react'

const HistoryListItem = ({index, url, isRemovable, onDelete, onSetInputUrl}) => (
  <div className="history-item flex-col card-1">
    {isRemovable ?
      <i className="fa fa-remove fa-lg right history-delete" onClick={(evt) => {onDelete(index)}}></i>
    : null}
    <img src={url}/>
    <div className="btn-group history-item-buttons" role="group">
      <a href={url} download={"galleryImage"+index+".png"}><button type="button" className="btn btn-secondary btn-sm">Download</button></a>
      <button type="button" onClick={(evt) => {onSetInputUrl(url)}}
        className="btn btn-secondary btn-sm">
        Set as Input
      </button>
    </div>
  </div>
)

export default HistoryListItem
