import { connect } from 'react-redux'
import { setRunningStatus } from '../actions'
import { setFilter } from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, ownProps) => {
  return {
    runningStatus: state.runningStatus,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRun: () => {
      dispatch(setRunningStatus("starting"));
    },
    onChangeFilter: (evt) => {
      dispatch(setFilter(evt.target.value));
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
