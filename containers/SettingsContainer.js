import { connect } from 'react-redux'
import { setRunningStatus } from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, ownProps) => {
  return {
    runningStatus: state.runningStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRun: () => {
      dispatch(setRunningStatus("starting"));
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
