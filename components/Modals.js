import React from 'react'

const Modals = () => (
  //Settings
  <div className="modal fade" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="Settings Details" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="settingsModalLabel">Settings</h4>
        </div>
        <div className="modal-body">
          Here are the details about the settings
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  //2
)

export default Modals
