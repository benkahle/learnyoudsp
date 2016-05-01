import React from 'react'
import TopSection from './TopSection'
import MainSection from './MainSection'
import Modals from './Modals'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <TopSection />
        <MainSection />
      </div>
    </div>
    <Modals />
  </div>
)

export default App
