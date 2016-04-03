import { combineReducers } from 'redux'
import kernel from './kernel'


const input = (state = "", action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_URL':
      return action.url
    default:
      return state
  }
}

const dspApp = combineReducers({
  kernel,
  input
})

export default dspApp
