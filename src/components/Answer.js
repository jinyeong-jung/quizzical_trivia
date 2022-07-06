import PropTypes from 'prop-types';
import { useState } from 'react';

import './Answer.css';

function Answer({ data, isCorrect, clickAnswer, resultOpened }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prev) => !prev);
  }

  return (
    <span
      className={`answer ${selected ? 'selected' : null} ${
        !resultOpened ? null : isCorrect ? 'correct' : 'incorrect'
      }`}
      onClick={handleClick}
    >
      {data}
    </span>
  );
}

export default Answer;

Answer.prototype = {
  data: PropTypes.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  clickAnswer: PropTypes.func.isRequired,
  resultOpened: PropTypes.bool.isRequired,
};
