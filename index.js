import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import dspApp from './reducers'
import App from './components/App'


const createPersistentStore = compose(
  persistState(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

let store = createPersistentStore(dspApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
