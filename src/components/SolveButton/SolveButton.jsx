import React, { PropTypes } from 'react';
import './SolveButton.scss';

const SolveButton = ({ solving, solve, cancel }) => (
  <button onClick={solving ? cancel : solve}>
    {solving ? 'Cancel' : 'Solve'}
  </button>
)

SolveButton.propTypes = {
  solving: PropTypes.bool.isRequired,
  solve: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
}

export default SolveButton
