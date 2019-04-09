import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/counter.actions';

export const initialState = {
  firstNumber: -5,
  secondNumber: 10
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increase:
      return {
        ...state,
        firstNumber: state.firstNumber + 1
      };

    case ActionTypes.Decrease:
      return {
        ...state,
        secondNumber: state.secondNumber - 1
      };

    default:
      return {...state};
  }
}

