import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import KernelSize from "./KernelSize"
import KernelList from "./KernelList"
import KernelView from "./KernelView"
import { setActiveKernel, setKernelSize, addStoredKernel, removeStoredKernel } from '../actions'


let sizeOptions = [
  {
    value: "3",
    display: "3x3"
  },
  {
    value: "4",
    display: "4x4"
  },
  {
    value: "5",
    display: "5x5"
  }
];

function emptyKernelBySize(size) {
  let kernel = [];
  for (let i=0; i<size; i++) {
    kernel.push([])
    for (let j=0; j<size; j++) {
      kernel.push("");
    }
  }
  return kernel
}

let Kernel = ({
  storedKernels,
  activeKernel,
  size,
  data,
  onSelectKernelSize,
  onClickKernelItem,
  onDeleteKernelItem,
  onChangeKernelData,
  onSaveKernelData,
  onClearKernelData,
}) => (
  <div>
    <KernelSize
      options={sizeOptions}
      onSelect={onSelectKernelSize}
    />
    <KernelList
      items={storedKernels}
      onClick={onClickKernelItem}
      onDelete={onDeleteKernelItem}
    />
    <KernelView
      size={size}
      data={activeKernel}
      onChange={onChangeKernelData}
      onSave={onSaveKernelData}
      onClear={onClearKernelData}
    />
  </div>
)

const mapStateToProps = (state) => {
  console.log("props updated");
  return {
    storedKernels: state.kernel.stored,
    activeKernel: state.kernel.activeKernel,
    size: Number(state.kernel.size),
    data: state.kernel.activeKernel
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectKernelSize: (size) => {
      dispatch(setKernelSize(size))
    },
    onClickKernelItem: (data) => {
      dispatch(setActiveKernel(data))
    },
    onDeleteKernelItem: (id) => {
      dispatch(removeStoredKernel(id))
    },
    onChangeKernelData: (data) => {
      dispatch(setActiveKernel(data))
    },
    onSaveKernelData: ({size, data}) => {
      dispatch(addStoredKernel({size, data}))
    },
    onClearKernelData: (size) => {
      dispatch(setActiveKernel(emptyKernelBySize(size)))
    }
  }
}

Kernel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kernel)

export default Kernel
