import React, { PropTypes } from 'react'
import KernelListItem from "./KernelListItem"

const KernelList = ({items, onClick, onDelete}) => (
  <div>
    {items.map(item =>
      <KernelListItem
        key={item.id}
        {...item}
        onClick={(id) => {
          onClick(items.find(item => item.id === id).data)
        }}
        onDelete={onDelete}
      />
    )}
  </div>
)

KernelList.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default KernelList
