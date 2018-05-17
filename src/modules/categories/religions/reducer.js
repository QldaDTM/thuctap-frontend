// @flow

import type { Religion, ReligionState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: ReligionState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: ReligionState = initialState, action: Action): ReligionState => {
  switch (action.type) {
    case constant.RESET:
      return { ...initialState };

    case constant.FETCH_STARTED:
      return {
        ...state,
        isFetching: true
      };

    case constant.FETCH_FAILED:
      return {
        ...state,
        isFetching: false
      };

    case constant.FETCH_FINISHED:
    {
      let list: Array<Religion> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((religion: Religion) => {
        newData[religion.id] = religion;
        set.add(religion.id)
      });
      let newOrdered: Array<string> = [ ...set.keys() ];

      return {
        data: { ...state.data, ...newData },
        ordered: newOrdered,
        isFetching: false
      };
    }

    default:
    break;
  }

  return state;
};

export default reducer;