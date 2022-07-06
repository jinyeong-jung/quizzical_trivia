import './QuizPage.css';
import Quiz from '../components/Quiz';
import blobYellowSrc from '../images/blob-yellow.png';
import blobBlueSrc from '../images/blob-blue.png';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function QuizPage() {
  const API_URL = 'https://opentdb.com/api.php?amount=10';

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultOpened, setResultOpened] = useState(false);

  useEffect(() => {
    async function getQuizzes() {
      const res = await fetch(API_URL);
      const json = await res.json();
      setQuizzes(json.results);
      await setLoading(false);
    }

    getQuizzes();
  }, []);

  const quizzesElements = quizzes.map((quiz) => (
    <Quiz
      key={nanoid()}
      question={quiz.question}
      correctAnswer={quiz.correct_answer}
      incorrectAnswers={quiz.incorrect_answers}
      resultOpened={resultOpened}
    />
  ));

  return (
    <div className='quiz-page'>
      <img className='blobYellow' src={blobYellowSrc} alt='blob-yellow' />
      <img className='blobBlue' src={blobBlueSrc} alt='blob-blue' />
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='quizzes'>
          {quizzesElements}
          <div className='button-container'>
            {/* <h4>You scored 3/5 correct answers</h4> */}
            <Button text='Check answers' />
            {/* <Button text='Play again' /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
