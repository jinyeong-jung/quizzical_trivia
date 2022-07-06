import './Quiz.css';

function Quiz() {
  return (
    <div className='quiz'>
      <h4 className='question'>How would one say goodbye in Spanish?</h4>
      <ul className='answers'>
        <li className='answer'>Adios</li>
        <li className='answer'>Hola</li>
        <li className='answer'>Au Revoir</li>
        <li className='answer'>Salir</li>
      </ul>
    </div>
  );
}

export default Quiz;
