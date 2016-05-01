import { connect } from 'react-redux'
import {
        setRunningStatus,
        setFilter,
        setBrightnessSettings,
        setThresholdSettings,
        setConvoluionSettings
      } from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, ownProps) => {
  return {
    runningStatus: state.runningStatus,
    filter: state.filter,
    brightnessSettings: state.brightnessSettings,
    thresholdSettings: state.thresholdSettings,
    convolutionSettings: state.convolutionSettings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRun: () => {
      dispatch(setRunningStatus("starting"));
    },
    onChangeFilter: (evt) => {
      dispatch(setFilter(evt.target.value));
    },
    onChangeFilterSettings: (type, settings) => {
      let functionMap = {
        "brightness": setBrightnessSettings,
        "threshold": setThresholdSettings,
        "convolutionSettings": setConvoluionSettings,
      }
      dispatch(functionMap[type](settings));
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
