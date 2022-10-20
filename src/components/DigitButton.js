import { ACTION } from '../App.js';

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  )
}

export default DigitButton;