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
  const [loading, setLoading] = useState(false);
  const [resultOpened, setResultOpened] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    async function getQuizzes() {
      setLoading(true);
      const res = await fetch(API_URL);
      const json = await res.json();
      const quizObjects = makeQuizObjects(json);

      setQuizzes(quizObjects);
      await setLoading(false);
    }

    getQuizzes();
  }, []);

  function replaceString(text) {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }

  function makeQuizObjects(data) {
    return data.results.map((quiz) => ({
      id: nanoid(),
      question: replaceString(quiz.question),
      answers: shuffleAnswers(quiz.correct_answer, quiz.incorrect_answers).map(
        (item) => {
          if (typeof item === 'string') {
            return replaceString(item);
          } else {
            return item;
          }
        }
      ),
      correct: false,
    }));
  }

  function shuffleAnswers(correctAnswer, incorrectAnswers) {
    let unshuffledAnswers = [correctAnswer, ...incorrectAnswers];
    return unshuffledAnswers
      .map((value) => ({
        value,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => {
        return {
          id: nanoid(),
          value,
          isCorrect: value === correctAnswer,
        };
      });
  }

  function gradeAnswer(quizCorrect) {
    setCorrectCount((prevCount) => (quizCorrect ? prevCount + 1 : prevCount));
  }

  function handleButtonClick() {
    if (resultOpened) {
      console.log(correctCount);
    } else {
      setResultOpened(true);
    }
  }

  const quizzesElements = quizzes.map((quiz) => (
    <Quiz
      key={quiz.id}
      question={quiz.question}
      answers={quiz.answers}
      resultOpened={resultOpened}
      gradeAnswer={gradeAnswer}
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
            {resultOpened && (
              <h4>
                You scored {correctCount}/{quizzes.length} correct answers
              </h4>
            )}
            <Button
              text={resultOpened ? 'Play again' : 'Check answers'}
              onClick={handleButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
