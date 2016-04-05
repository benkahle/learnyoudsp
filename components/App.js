import React from 'react'
import TopSection from './TopSection'
import MainSection from './MainSection'
import SideBar from './SideBar'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-10">
        <TopSection />
        <div className="separator"></div>
        <MainSection />
      </div>
      <div className="col-sm-2">
        <SideBar />
      </div>
    </div>
  </div>
)

export default App
