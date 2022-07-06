import PropTypes from 'prop-types';
import './Button.css';

function Button({ text, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
