import './QuizPage.css';
import Quiz from '../components/Quiz';
import blobYellowSrc from '../images/blob-yellow.png';
import blobBlueSrc from '../images/blob-blue.png';
import Button from '../components/Button';

function QuizPage() {
  return (
    <div className='quiz-page'>
      <img className='blobYellow' src={blobYellowSrc} alt='blob-yellow' />
      <img className='blobBlue' src={blobBlueSrc} alt='blob-blue' />

      <div className='quizzes'>
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <div className='button-container'>
          {/* <h4>You scored 3/5 correct answers</h4> */}
          <Button text='Check answers' />
          {/* <Button text='Play again' /> */}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
