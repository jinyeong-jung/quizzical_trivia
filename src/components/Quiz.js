import PropTypes from 'prop-types';
import { useState } from 'react';
import './Quiz.css';

function Quiz({ question, answers, resultOpened, gradeAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function selectAnswer(answerId) {
    const answer = answers.find((answer) => answer.id === answerId);

    if (selectedAnswer && selectedAnswer.id === answerId) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
    }
  }

  const answerElements = answers.map((answer) => (
    <button
      key={answer.id}
      onClick={() => selectAnswer(answer.id)}
      disabled={resultOpened}
      className={`answer ${
        selectedAnswer && selectedAnswer.id === answer.id ? 'selected' : null
      } ${!resultOpened ? null : answer.isCorrect ? 'correct' : 'incorrect'}`}
    >
      {answer.value}
    </button>
  ));

  return (
    <div className='quiz'>
      <h4 className='question'>{question}</h4>
      <div className='answers'>{answerElements}</div>
    </div>
  );
}

export default Quiz;

Quiz.prototype = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  resultOpened: PropTypes.bool.isRequired,
  gradeAnswer: PropTypes.func.isRequired,
};
