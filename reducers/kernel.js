import { combineReducers } from 'redux'

const defaultState = {
  activeKernel: [[1,0,1],[1,2,1],[1,0,1]],
  size: 3,
  stored: [
    {
      id: "1",
      name: "sobel-X",
      size: 3,
      data: [[-1,0,1],[-2,0,2],[-1,0,1]],
      help: true,
      isRemovable: false
    },
    {
      id: "2",
      name: "sobel-Y",
      size: 3,
      data: [[-1,-2,-1],[0,0,0],[1,2,1]],
      help: true,
      isRemovable: false
    },
    {
      id: "3",
      name: "sharpen",
      size: 3,
      data: [[0,-1,0],[-1,5,-1],[0,-1,0]],
      help: true,
      isRemovable: false
    },
    {
      id: "4",
      name: "blur",
      size: 3,
      data: [[0,1,0],[1,-3,1],[0,1,0]],
      help: true,
      isRemovable: false
    }
  ]
}

const activeKernel = (state = defaultState.activeKernel, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_KERNEL':
      return [...action.data]
    default:
      return state
  }
}

const size = (state = defaultState.size, action) => {
  switch (action.type) {
    case 'SET_KERNEL_SIZE':
      return action.size
    default:
      return state
  }
}

const stored = (state = defaultState.stored, action) => {
  switch (action.type) {
    case 'ADD_STORED_KERNEL':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          size: action.size,
          data: action.data,
          help: false,
          isRemovable: true
        }
      ]
    case 'REMOVE_STORED_KERNEL':
      return state.filter(kern => {
        return kern.id !== action.id
      })
    default:
      return state
  }
}

const kernel = combineReducers({
  activeKernel,
  size,
  stored
})

export default kernel
