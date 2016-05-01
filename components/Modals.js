import React from 'react'

const makeModal = (opts) => {
  return (
    <div key={opts.id} className="modal fade" id={opts.id} tabIndex="-1" role="dialog" aria-labelledby={opts.label} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id={opts.id+"Label"}>{opts.heading}</h4>
          </div>
          <div className="modal-body">
            {opts.body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const modalData = {
  "sobel-X": {
    id: "kernelsobel-XModal",
    label: "sobel-X Kernel Details",
    heading: "Sobel X-Directional Kernel",
    body: "Details"
  },
  "sobel-Y": {
    id: "kernelsobel-YModal",
    label: "sobel-Y Kernel Details",
    heading: "Sobel Y-Directional Kernel",
    body: "Details"
  },
  "sharpen": {
    id: "kernelsharpenModal",
    label: "Sharpen Kernel Details",
    heading: "Sharpen Kernel",
    body: "Details"
  },
  "blur": {
    id: "kernelblurModal",
    label: "Blur Kernel Details",
    heading: "Blur Kernel",
    body: "Details"
  },
  "settings": {
    id: "settingsModal",
    label: "Settings Details",
    heading: "Settings",
    body: "Here are the details about the settings"
  },
  "kernel": {
    id: "kernelModal",
    label: "Kernel and Convolution Details",
    heading: "Convolution and Kernels",
    body: "Learning about convolution!"
  }
}

const makeModals = () => {
  return Object.keys(modalData).map(modalName => {
    return makeModal(modalData[modalName]);
  });
}

const Modals = () => (
  <div id="modals">
    {makeModals()}
  </div>
)

export default Modals
