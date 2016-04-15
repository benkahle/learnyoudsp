import { combineReducers } from 'redux'
import kernel from './kernel'


const inputUrl = (state = "", action) => {
  switch (action.type) {
    case 'SET_INPUT_URL':
      return action.url
      break;
    default:
      return state
  }
}

const outputUrl = (state = "", action) => {
  switch (action.type) {
    case 'SET_OUTPUT_URL':
      return action.url
      break;
    default:
      return state
  }
}

const runningStatus = (state = "stopped", action) => {
  switch (action.type) {
    case "SET_RUNNING_STATUS":
      return action.status
      break;
    default:
      return state
  }
}

const filter = (state = "convolve", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter
      break;
    default:
      return state
  }
}

const dspApp = combineReducers({
  kernel,
  inputUrl,
  outputUrl,
  filter,
  runningStatus
})

export default dspApp
