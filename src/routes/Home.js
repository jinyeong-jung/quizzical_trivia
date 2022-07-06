import './Home.css';
import blobYellowSrc from '../images/blob-yellow.png';
import blobBlueSrc from '../images/blob-blue.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <img className='blobYellow' src={blobYellowSrc} alt='blob-yellow' />
      <img className='blobBlue' src={blobBlueSrc} alt='blob-blue' />

      <main>
        <h1 className='title'>Quizzical</h1>
        <p className='text'>Can you answer these 15 quizzical questions?</p>
        <Link to='/quiz'>
          <button className='quiz-btn'>Start quiz</button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
