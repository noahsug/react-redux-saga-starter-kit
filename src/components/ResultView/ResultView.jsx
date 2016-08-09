import React, { PropTypes } from 'react';
import './ResultView.scss';

const ResultView = ({ result, solving }) => (
  <div>
    {solving ? `Calculating... (${result})` : `Result: ${result}`}
  </div>
)

ResultView.propTypes = {
  result: PropTypes.number.isRequired,
  solving: PropTypes.bool.isRequired,
}

export default ResultView
