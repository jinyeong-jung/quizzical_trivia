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
    function makeQuizObjects(data) {
      return data.results.map((quiz) => ({
        id: nanoid(),
        question: replaceString(quiz.question),
        answers: shuffleAnswers(
          quiz.correct_answer,
          quiz.incorrect_answers
        ).map((item) => {
          if (typeof item.value === 'string') {
            return { ...item, value: replaceString(item.value) };
          } else {
            return item;
          }
        }),
        correct: false,
      }));
    }

    async function getQuizzes() {
      setLoading(true);

      const res = await fetch(API_URL);
      const data = await res.json();
      const quizzes = await makeQuizObjects(data);

      setQuizzes(quizzes);
      setLoading(false);
    }

    if (!resultOpened) {
      getQuizzes();
    }
  }, [resultOpened]);

  function replaceString(text) {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&micro;/g, 'µ')
      .replace(/&Uuml;/g, 'Ü')
      .replace(/&amp;/g, '&')
      .replace(/&Eacute;/g, 'É')
      .replace(/&eacute;/g, 'é')
      .replace(/&deg;/g, '°');
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
      setResultOpened(false);
      setCorrectCount(0);
    } else {
      setResultOpened(true);
    }
  }

  const quizzesElements =
    quizzes &&
    quizzes.map((quiz) => (
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
