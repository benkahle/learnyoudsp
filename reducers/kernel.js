import { combineReducers } from 'redux'

const defaultState = {
  activeKernel: [[-1,0,1],[-2,0,2],[-1,0,1]],
  size: 3,
  stored: [
    {
      id: "1",
      name: "Sobel-X",
      size: 3,
      data: [[-1,0,1],[-2,0,2],[-1,0,1]],
      help: true,
      isRemovable: false
    },
    {
      id: "2",
      name: "Sobel-Y",
      size: 3,
      data: [[-1,-2,-1],[0,0,0],[1,2,1]],
      help: true,
      isRemovable: false
    },
    {
      id: "3",
      name: "Edge",
      size: 3,
      data: [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]],
      help: true,
      isRemovable: false
    },
    {
      id: "4",
      name: "Emboss",
      size: 3,
      data: [[-2,-1,0],[-1,1,1],[0,1,2]],
      help: true,
      isRemovable: false
    },
    {
      id: "5",
      name: "Sharpen",
      size: 3,
      data: [[0,-1,0],[-1,5,-1],[0,-1,0]],
      help: true,
      isRemovable: false
    },
    {
      id: "6",
      name: "Box-blur",
      size: 3,
      data: [[1,1,1],[1,1,1],[1,1,1]].map(arr => arr.map(val => val/9)),
      help: true,
      isRemovable: false
    },
    {
      id: "7",
      name: "Gaussian-blur",
      size: 3,
      data: [[1,2,1],[2,4,2],[1,2,1]].map(arr => arr.map(val => val/16)),
      help: true,
      isRemovable: false
    },
    {
      id: "8",
      name: "Unsharp-mask",
      size: 5,
      data: [[1,4,6,4,1],[4,15,24,16,4],[6,24,-476,24,6],[4,16,24,16,4],[1,4,6,4,1]].map(arr => arr.map(val => -val/256)),
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
