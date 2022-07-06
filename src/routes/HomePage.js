import './HomePage.css';
import blobYellowSrc from '../images/blob-yellow.png';
import blobBlueSrc from '../images/blob-blue.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function HomePage() {
  return (
    <div className='home-page'>
      <img className='blobYellow' src={blobYellowSrc} alt='blob-yellow' />
      <img className='blobBlue' src={blobBlueSrc} alt='blob-blue' />

      <main>
        <h1 className='title'>Quizzical</h1>
        <p className='text'>Can you answer these 10 quizzical questions?</p>
        <Link to='/quiz'>
          <Button text='Start quiz' />
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
