import React, { PropTypes } from 'react'

const InputOptions = (props) => (
  <div className="col-sm-12 flex-row space-between">
    <h3>Choose file:</h3>
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary btn-file">
        Upload
        <input type="file" onChange={(e) => {
          var fileInput = e.target.files[0]
          if (fileInput) {
            props.onFileSet(fileInput)
          }
          e.target.value = ""
        }}/>
      </button>
      <button type="button" className="btn btn-secondary">From Gallery</button>
    </div>
  </div>
)

export default InputOptions
