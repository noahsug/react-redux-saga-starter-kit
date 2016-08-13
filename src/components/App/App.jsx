import React, { PropTypes } from 'react'
import './App.scss'
import SolveButton from '../SolveButton'
import ResultView from '../ResultView'

const App = ({ result, solving, ...other }) => (
  <div>
    <SolveButton solving={solving} {...other} />
    {result === undefined ? null : (
      <ResultView result={result} solving={solving} />
    )}
  </div>
)

App.propTypes = {
  solving: PropTypes.bool.isRequired,
  result: PropTypes.number,
  solve: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
}

export default App
