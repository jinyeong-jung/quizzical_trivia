import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Answer from './Answer';
import './Quiz.css';

function Quiz({ question, correctAnswer, incorrectAnswers, resultOpened }) {
  let unshuffledAnswers = [correctAnswer, ...incorrectAnswers];
  let shuffledAnswers = unshuffledAnswers
    .map((value) => ({
      value,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => {
      return {
        id: nanoid(),
        data: value,
        isCorrect: value === correctAnswer,
      };
    });

  function clickAnswer(answer) {
    // console.log(correctAnswer);
    // console.log(answer);
    // console.log(correctAnswer === answer);
  }

  return (
    <div className='quiz'>
      <h4 className='question'>{question}</h4>
      <div className='answers'>
        {shuffledAnswers.map((answer) => (
          <Answer
            key={answer.id}
            data={answer.data}
            isCorrect={answer.isCorrect}
            resultOpened={false}
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
  correctAnswer: PropTypes.isRequired,
  incorrectAnswers: PropTypes.array.isRequired,
  resultOpened: PropTypes.bool.isRequired,
};
