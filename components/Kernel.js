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
  },
  {
    value: "6",
    display: "6x6"
  },
  {
    value: "7",
    display: "7x7"
  }
];

function emptyKernelBySize(size) {
  let kernel = [];
  for (let i=0; i<size; i++) {
    kernel.push([])
    for (let j=0; j<size; j++) {
      kernel[i].push(0);
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
  <div className="col-sm-6">
    <h1>
      Kernel
    </h1>
    <div className="row">
      <div className="col-sm-6">
        <KernelSize
          options={sizeOptions}
          onSelect={onSelectKernelSize}
        />
        <KernelList
          items={storedKernels}
          onClick={onClickKernelItem}
          onDelete={onDeleteKernelItem}
        />
      </div>
      <div className="col-sm-6">
        <KernelView
          size={size}
          data={activeKernel}
          onChange={onChangeKernelData}
          onSave={onSaveKernelData}
          onClear={onClearKernelData}
        />
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
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
    onClickKernelItem: (data, size) => {
      dispatch(setKernelSize(size))
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
