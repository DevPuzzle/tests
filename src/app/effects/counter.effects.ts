import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes } from '../actions/counter.actions';
import { mergeMap} from 'rxjs/operators';


@Injectable()
export class CounterEffects {
  iteration = 0;

  @Effect()
  changeCounter = this.actions$
    .pipe(
      ofType(ActionTypes.Change),
      mergeMap(() => {
        const actions = [{type: ActionTypes.Increase}, ...this.decrease(2)];
        return actions;
      })
    );

  constructor(
    private actions$: Actions
  ) {}

  decrease(repeatTimes = 1) {
    const decreaseActions = [];

    for (let i = 0; i < repeatTimes; i++) {
      decreaseActions.push({type: ActionTypes.Decrease});
    }
    return decreaseActions;
  }
}
