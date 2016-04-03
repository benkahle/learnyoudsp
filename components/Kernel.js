import React, { PropTypes } from 'react'
import KernelSize from "./KernelSize"
import KernelList from "./KernelList"
import KernelView from "./KernelView"

let options = [
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

let items = [
  {
    id: "1",
    name: "sobel",
    size: 3,
    data: [[1,0,1],[1,2,1],[1,0,1]],
    help: true,
    isRemovable: false
  },
  {
    id: "2",
    name: "edge",
    size: 3,
    data: [[1,0,-1],[1,0,-1],[1,0,-1]],
    help: true,
    isRemovable: true
  }
];

let activeKernel = [[1,0,1],[1,2,1],[1,0,1]];

const Kernel = () => (
  <div>
    <KernelSize
      options={options}
      onSelect={(foo) => console.log(foo)}
    />
    <KernelList
      items={items}
      onClick={(foo) => console.log(`kernel ${foo} clicked`)}
      onDelete={(foo) => console.log(`kernel ${foo} deleted`)}
    />
    <KernelView
      size={3}
      data={activeKernel}
      onChange={(kernelData) => {console.log(`active kernel: ${kernelData}`); activeKernel = kernelData}}
      onSave={(kernelData) => console.log(`active kernel saved: ${kernelData}`)}
      onClear={(kernelData) => console.log("active kernel cleared")}
    />
  </div>
)

export default Kernel
