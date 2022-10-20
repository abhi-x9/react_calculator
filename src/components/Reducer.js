import { ACTION } from "../App";
import { evaluation } from "./Evaluation";

export const reducer = (state, { type, payload }) => {

  
  switch (type){
    default:
      return state;
      
     case ACTION.ADD_DIGIT:
      if(state.overWrite){
        return {
          ...state,
          current: payload.digit,
          overWrite: false,
        }
      }
      if(payload.digit === "0" && state.current === "0"){
        return state;
      }
      if(payload.digit === "." && state.current === "."){
        return state;
      }
      return {
        ...state,
        current : `${state.current || ""}${payload.digit}`
      }

      case ACTION.CHOOSE_OPERATION:
        if(state.current == null && state.previous == null){
          return state
        }
        if(state.current == null){
          return {
            ...state,
            operation: payload.sign,
            
          }
        }
        if(state.previous == null){
          return {
            ...state,
            operation: payload.sign,
            previous: state.current,
            current: evaluation(state),
          }
        }

        return {
          ...state,
          previous: evaluation(state),
          operation: payload.sign,
          current: null,
        }
        case ACTION.CLEAR:
          return {};

          case ACTION.EVALUATE:
           if(state.operation == null || 
            state.previous == null || 
            state.current == null) {
              return state;
            }
            return {
              overWrite : true,
              operation: null,
              previous: null,
              current: evaluation(state)
            }
            case ACTION.DELETE:
              if(state.current == null) return state;
              if(state.current.length === 1){
                return {
                  ...state,
                  current: null,
                }
              };
              return {
                ...state,
                  current: state.current.slice(0, -1)
              }
  }
  
};
