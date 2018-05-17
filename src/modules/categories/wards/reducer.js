// @flow

import type { Ward, WardState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: WardState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: WardState = initialState, action: Action): WardState => {
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
      let list: Array<Ward> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((ward: Ward) => {
        newData[ward.id] = ward;
        set.add(ward.id)
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