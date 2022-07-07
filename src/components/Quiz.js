import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Quiz.css';

function Quiz({ id, question, answers, resultOpened, gradeAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    gradeAnswer({
      quizId: id,
      selectedAnswerId: selectedAnswer && selectedAnswer.id,
      isCorrect: selectedAnswer && selectedAnswer.isCorrect,
    });
  }, [selectedAnswer]);

  function selectAnswer(answerId) {
    const answer = answers.find((answer) => answer.id === answerId);

    setSelectedAnswer((prevSelectedAnswer) =>
      prevSelectedAnswer && prevSelectedAnswer.id === answerId ? null : answer
    );
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
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  resultOpened: PropTypes.bool.isRequired,
  gradeAnswer: PropTypes.func.isRequired,
};
