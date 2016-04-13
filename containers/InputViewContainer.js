import { connect } from 'react-redux'
// import { setInputUrl } from '../actions'
import InputView from '../components/InputView'

const mapStateToProps = (state, ownProps) => {
  return {
    inputUrl: state.inputUrl
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const InputViewContainer = connect(
  mapStateToProps
)(InputView)

export default InputViewContainer
