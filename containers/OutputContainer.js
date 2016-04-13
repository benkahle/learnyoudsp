import { connect } from 'react-redux'
import { setRunningStatus } from '../actions'
import { setOutputUrl } from '../actions'
import Output from '../components/Output'

const mapStateToProps = (state, ownProps) => {
  return {
    runningStatus: state.runningStatus,
    inputUrl: state.inputUrl,
    kernel: state.kernel.activeKernel,
    kernelSize: Number(state.kernel.size),
    outputUrl: state.outputUrl
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComplete: () => {
      dispatch(setRunningStatus("stopped"));
    },
    onStarted: () => {
      dispatch(setRunningStatus("running"));
    },
    setOutputUrl: (url) => {
      dispatch(setOutputUrl(url));
    }
  }
}

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output)

export default OutputContainer
