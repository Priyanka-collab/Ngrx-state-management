import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../counter/counter.action'

export const initialState = 0; // Initial counter value

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);
