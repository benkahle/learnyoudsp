import React, { PropTypes } from 'react'
import Kernel from "./Kernel"
import Instructions from "./Instructions"

const TopSection = () => (
  <div className="row">
    <Kernel />
    <Instructions />
  </div>
)

export default TopSection
