import { connect } from 'react-redux'
import { setInputUrl, setRunningStatus, setOutputUrl, addToHistory } from '../actions'
import Output from '../components/Output'

const mapStateToProps = (state, ownProps) => {
  return {
    runningStatus: state.runningStatus,
    inputUrl: state.inputUrl,
    kernel: state.kernel.activeKernel,
    kernelSize: Number(state.kernel.size),
    outputUrl: state.outputUrl,
    filter: state.filter,
    brightnessSettings: state.brightnessSettings,
    thresholdSettings: state.thresholdSettings,
    convolutionSettings: state.convolutionSettings
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
    },
    addToHistory: (url) => {
      dispatch(addToHistory(url));
      let $list = $(".history-list");
      $list.animate({
        scrollTop: $list.prop("scrollHeight")
      }, 300);
    },
    setInputUrl: (url) => {
      dispatch(setInputUrl(url));
    }
  }
}

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output)

export default OutputContainer
