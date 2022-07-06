import PropTypes from 'prop-types';
import { useState } from 'react';

import './Answer.css';

function Answer({ id, value, isCorrect, clickAnswer, resultOpened }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prev) => !prev);
    if (selected) {
      clickAnswer(id);
    }
  }

  return (
    <span
      className={`answer ${selected ? 'selected' : null} ${
        !resultOpened ? null : isCorrect ? 'correct' : 'incorrect'
      }`}
      onClick={handleClick}
    >
      {value}
    </span>
  );
}

export default Answer;

Answer.prototype = {
  id: PropTypes.string.isRequired,
  value: PropTypes.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  clickAnswer: PropTypes.func.isRequired,
  resultOpened: PropTypes.bool.isRequired,
};
