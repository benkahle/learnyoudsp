let nextStoredKernelId = 100

export const setActiveKernel = (data) => {
  return {
    type: "SET_ACTIVE_KERNEL",
    data: data
  }
}

export const setKernelSize = (size) => {
  return {
    type: "SET_KERNEL_SIZE",
    size: size
  }
}

export const addStoredKernel = (kernel) => {
  return {
    type: "ADD_STORED_KERNEL",
    id: ""+nextStoredKernelId++, //TODO: Actual id
    name: kernel.name || "My_kernel_"+ (nextStoredKernelId - 100), //TODO: Better placeholder
    size: kernel.size,
    data: kernel.data
  }
}

export const removeStoredKernel = (id) => {
  return {
    type: "REMOVE_STORED_KERNEL",
    id: id
  }
}

export const setInputUrl = (url) => {
  return {
    type: "SET_INPUT_URL",
    url: url
  }
}
export const setOutputUrl = (url) => {
  return {
    type: "SET_OUTPUT_URL",
    url: url
  }
}

export const setRunningStatus = (status) => {
  return {
    type: "SET_RUNNING_STATUS",
    status: status
  }
}
