import { connect } from 'react-redux'
import { solve, cancel } from '../actions'
import App from '../components/App'

const mapStateToProps = (state) => ({
  solving: state.solving,
  result: state.result,
})

const mapDispatchToProps = (dispatch) => ({
  solve: () => dispatch(solve()),
  cancel: () => dispatch(cancel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
