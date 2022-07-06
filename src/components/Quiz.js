import PropTypes from 'prop-types';
import './Quiz.css';

function Quiz({ question, correctAnswer, incorrectAnswers }) {
  let unshuffledAnswers = [correctAnswer, ...incorrectAnswers];
  let shuffledAnswers = unshuffledAnswers
    .map((value) => ({
      value,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map((answer, i) => (
      <li key={i} className='answer'>
        {answer}
      </li>
    ));

  return (
    <div className='quiz'>
      <h4 className='question'>{question}</h4>
      <ul className='answers'>{shuffledAnswers}</ul>
    </div>
  );
}

export default Quiz;

Quiz.prototype = {
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.array.isRequired,
};
