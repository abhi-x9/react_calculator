import { Fragment, useReducer } from "react";
import './App.css'
import DigitButton from './components/DigitButton'
import OperationButton from "./components/OperandButton";
import { reducer } from "./components/Reducer";
export const ACTION = {

  ADD_DIGIT: 'add',
  CLEAR: 'clear',
  DELETE: 'delete',
  EVALUATE: 'sum',
  CHOOSE_OPERATION: 'choose',

}

const App = () => {

  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})

  return (

    <Fragment>
      <div className="container-grid">
        <div className="output">
          <div className="previous-output">{previous} {operation}</div>
          <div className="current-output">{current}</div>
        </div>
        <button className="span-two" onClick={() => dispatch({ type: ACTION.CLEAR })}>AC</button>
        <button onClick={() => dispatch({ type: ACTION.DELETE })}>DEL</button>
        <OperationButton sign="/" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton sign="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton sign="-" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton sign="+" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({ type: ACTION.EVALUATE })}>=</button>

      </div>
    </Fragment>

  )
}

export default App;