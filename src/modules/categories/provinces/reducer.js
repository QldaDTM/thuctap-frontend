// @flow

import type { Province, ProvinceState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: ProvinceState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: ProvinceState = initialState, action: Action): ProvinceState => {
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
      let list: Array<Province> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((province: Province) => {
        newData[province.id] = province;
        set.add(province.id)
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