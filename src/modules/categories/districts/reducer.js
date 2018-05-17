// @flow

import type { District, DistrictState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: DistrictState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: DistrictState = initialState, action: Action): DistrictState => {
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
      let list: Array<District> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((district: District) => {
        newData[district.id] = district;
        set.add(district.id)
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