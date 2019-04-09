import { Action } from '@ngrx/store';

export enum ActionTypes {
  Change = '[Counter] Change',
  Increase = '[Counter] Increment',
  Decrease = '[Counter] Decrease',
}

export class Increase implements Action {
  readonly type = ActionTypes.Increase;
}

export class Decrease implements Action {
  readonly type = ActionTypes.Decrease;
}

export class Change implements Action {
  readonly type = ActionTypes.Change;
}
