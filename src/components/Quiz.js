import PropTypes from 'prop-types';
import Answer from './Answer';
import './Quiz.css';

function Quiz({ question, answers, resultOpened, gradeAnswer }) {
  function clickAnswer(selectedAnswerId) {
    const selectedAnswer = answers.find(
      (answer) => answer.id === selectedAnswerId
    );
    gradeAnswer(selectedAnswer.isCorrect);
  }

  return (
    <div className='quiz'>
      <h4 className='question'>{question}</h4>
      <div className='answers'>
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            id={answer.id}
            value={answer.value}
            isCorrect={answer.isCorrect}
            resultOpened={resultOpened}
            clickAnswer={clickAnswer}
          />
        ))}
      </div>
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
