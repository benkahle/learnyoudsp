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

const brightnessSettings = (state = 50, action) => {
  switch (action.type) {
    case "SET_BRIGHTNESS_SETTINGS":
      return action.value
      break;
    default:
      return state
  }
}

const thresholdSettings = (state = 50, action) => {
  switch (action.type) {
    case "SET_THRESHOLD_SETTINGS":
      return action.value
      break;
    default:
      return state
  }
}

const convolutionSettings = (state = {}, action) => {
  switch (action.type) {
    case "SET_CONVOLUTION_SETTINGS":
      return action.settings
      break;
    default:
      return state
  }
}

const defaultHistory = [
  {
    url: "static/images/butterfly.jpg",
    isRemovable: false
  },
  {
    url: "static/images/shark.jpg",
    isRemovable: false
  },
  {
    url: "static/images/tiger.jpg",
    isRemovable: false
  }
];

const historyList = (state = defaultHistory, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return [...state, {url: action.url, isRemovable: action.isRemovable}];
      break;
    case "REMOVE_FROM_HISTORY":
      return state.filter((entry, i) => i !== action.index)
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
  brightnessSettings,
  thresholdSettings,
  convolutionSettings,
  historyList,
  runningStatus
})

export default dspApp
