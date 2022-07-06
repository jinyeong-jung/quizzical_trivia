import PropTypes from 'prop-types';
import './Button.css';

function Button({ text }) {
  return <button className='button'>{text}</button>;
}

export default Button;

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
