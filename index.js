import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'
import App from './components/App'

// let store = createStore()

// <Provider store={store}>
// </Provider>,
render(
    <App />,
  document.getElementById('root')
)
