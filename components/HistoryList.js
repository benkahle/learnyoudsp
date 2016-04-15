import React, { PropTypes } from 'react'
import HistoryListItem from "./HistoryListItem"

const HistoryList = (props) => (
  <div className="col-sm-3 z-depth-1 side-bar">
    <h3 className="history-title">History</h3>
    <div className="col-sm-12 flex-col history-list">
    {props.historyList.map((url, i) =>
      <HistoryListItem
      key={i}
      index={i}
      url={url}
      onDelete={props.onDelete}
      onSetInputUrl={props.onSetInputUrl}
      />
    )}
    </div>
  </div>
)

export default HistoryList
