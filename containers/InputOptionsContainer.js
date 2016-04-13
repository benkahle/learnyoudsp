import { connect } from 'react-redux'
import { setInputUrl } from '../actions'
import InputOptions from '../components/InputOptions'

function getMediaFileData(fileInput, callback) {
  var reader = new FileReader();
  reader.onload = (readerLoadedEvent) => {
    callback(readerLoadedEvent.target.result);
  }
  reader.readAsDataURL(fileInput);
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFileSet: (fileInput) => {
      //TODO: Make this properly async
      getMediaFileData(fileInput, result => {
        dispatch(setInputUrl(result));
      });
    }
  }
}

const InputOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputOptions)

export default InputOptionsContainer
