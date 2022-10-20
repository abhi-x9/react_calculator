import { ACTION } from '../App.js';

const OperationButton = ({ dispatch, sign }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { sign } })}>
      {sign}
    </button>
  )
}

export default OperationButton;