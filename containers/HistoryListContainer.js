import { connect } from 'react-redux'
import { removeFromHistory, setInputUrl } from '../actions'
import HistoryList from '../components/HistoryList'

const mapStateToProps = (state, ownProps) => {
  return {
    historyList: state.historyList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (index) => {
      dispatch(removeFromHistory(index))
    },
    onSetInputUrl: (url) => {
      dispatch(setInputUrl(url))
    }
  }
}

const HistoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList)

export default HistoryListContainer
