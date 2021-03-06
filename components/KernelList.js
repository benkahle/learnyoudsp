import React, { PropTypes } from 'react'
import KernelListItem from "./KernelListItem"

const KernelList = ({items, onClick, onDelete}) => (
  <div className="row">
    <div className="col-sm-12 btn-group-vertical kernel-list-container z-depth-1">
      {items.map(item =>
        <KernelListItem
          key={item.id}
          {...item}
          onClick={(id) => {
            let kern = items.find(item => item.id === id);
            onClick(kern.data, kern.size)
          }}
          onDelete={onDelete}
        />
      )}
    </div>
  </div>
)

KernelList.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default KernelList
