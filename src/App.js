import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import QuizPage from './routes/QuizPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
